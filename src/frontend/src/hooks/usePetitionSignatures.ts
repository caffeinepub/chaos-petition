import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Signature } from '../backend';

export function useSignatureCount() {
  const { actor, isFetching } = useActor();

  return useQuery<bigint>({
    queryKey: ['signatureCount'],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getSignatureCount();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSignatures() {
  const { actor, isFetching } = useActor();

  return useQuery<Signature[]>({
    queryKey: ['signatures'],
    queryFn: async () => {
      if (!actor) return [];
      const sigs = await actor.getSignatures();
      // Return in reverse order (most recent first)
      return [...sigs].reverse();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateSignature() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      firstName,
      lastName,
      areaCode,
    }: {
      firstName: string;
      lastName: string;
      areaCode: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.createSignature(firstName, lastName, areaCode);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['signatureCount'] });
      queryClient.invalidateQueries({ queryKey: ['signatures'] });
    },
  });
}
