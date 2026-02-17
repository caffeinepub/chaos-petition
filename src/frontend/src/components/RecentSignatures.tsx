import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useSignatures } from '@/hooks/usePetitionSignatures';
import { formatDistanceToNow } from 'date-fns';

export function RecentSignatures() {
  const { data: signatures, isLoading } = useSignatures();

  const formatTimestamp = (timestamp: bigint) => {
    // Convert nanoseconds to milliseconds
    const milliseconds = Number(timestamp / 1_000_000n);
    return formatDistanceToNow(new Date(milliseconds), { addSuffix: true });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Signatures</CardTitle>
        <CardDescription>Latest supporters of the movement</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-sm text-muted-foreground">Loading signatures...</p>
        ) : !signatures || signatures.length === 0 ? (
          <p className="text-sm text-muted-foreground">No signatures yet. Be the first to sign!</p>
        ) : (
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {signatures.map((signature, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">
                        {signature.firstName} {signature.lastName}
                      </p>
                      <p className="text-sm text-muted-foreground">Area code: {signature.areaCode}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{formatTimestamp(signature.createdAt)}</p>
                  </div>
                  {index < signatures.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}
