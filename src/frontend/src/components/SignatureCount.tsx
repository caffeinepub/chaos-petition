import { Card, CardContent } from '@/components/ui/card';
import { useSignatureCount } from '@/hooks/usePetitionSignatures';
import { Users } from 'lucide-react';

export function SignatureCount() {
  const { data: count, isLoading } = useSignatureCount();

  return (
    <Card className="bg-primary text-primary-foreground">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary-foreground/10 rounded-lg">
            <Users className="h-8 w-8" />
          </div>
          <div>
            <p className="text-sm font-medium opacity-90">Total Signatures</p>
            <p className="text-4xl font-bold tracking-tight">
              {isLoading ? '...' : count?.toString() || '0'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
