import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useCreateSignature } from '@/hooks/usePetitionSignatures';
import { CheckCircle2, Loader2 } from 'lucide-react';

export function SignatureForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [areaCode, setAreaCode] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const createSignature = useCreateSignature();

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!areaCode.trim()) {
      newErrors.areaCode = 'Area code is required';
    } else if (!/^\d{3}$/.test(areaCode)) {
      newErrors.areaCode = 'Area code must be exactly 3 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(false);

    if (!validate()) {
      return;
    }

    createSignature.mutate(
      { firstName: firstName.trim(), lastName: lastName.trim(), areaCode: areaCode.trim() },
      {
        onSuccess: () => {
          setFirstName('');
          setLastName('');
          setAreaCode('');
          setErrors({});
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 5000);
        },
      }
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign the Petition</CardTitle>
        <CardDescription>Add your voice to the movement for accessible luxury</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className={errors.firstName ? 'border-destructive' : ''}
            />
            {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className={errors.lastName ? 'border-destructive' : ''}
            />
            {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="areaCode">Area Code</Label>
            <Input
              id="areaCode"
              value={areaCode}
              onChange={(e) => setAreaCode(e.target.value)}
              placeholder="3 digits (e.g., 212)"
              maxLength={3}
              className={errors.areaCode ? 'border-destructive' : ''}
            />
            {errors.areaCode && <p className="text-sm text-destructive">{errors.areaCode}</p>}
          </div>

          {showSuccess && (
            <Alert className="bg-primary/10 border-primary">
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>Thank you for signing! Your signature has been recorded.</AlertDescription>
            </Alert>
          )}

          {createSignature.isError && (
            <Alert variant="destructive">
              <AlertDescription>
                Failed to submit signature. Please check your connection and try again.
              </AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={createSignature.isPending}>
            {createSignature.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing...
              </>
            ) : (
              'Sign Petition'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
