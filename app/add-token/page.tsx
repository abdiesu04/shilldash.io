'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import AddTokenForm from '@/components/tokens/AddTokenForm';
import SignInDialog from '@/components/ui/SignInDialog';

export default function AddTokenPage() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return (
      <SignInDialog
        title="Sign In to Add Tokens"
        message="Please sign in to start adding and tracking your tokens"
        onClose={() => router.push('/')}
      />
    );
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#00FFA3] via-[#03E1FF] to-[#DC1FFF] bg-clip-text text-transparent">
          Add New Token
        </h1>
        <AddTokenForm onSuccess={() => router.push('/dashboard')} />
      </div>
    </div>
  );
} 