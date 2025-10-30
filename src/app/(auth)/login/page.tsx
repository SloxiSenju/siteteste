'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BookHeart } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="animate-in fade-in-50 duration-500">
      <Card className="w-full max-w-sm border-2 border-primary/20 bg-card/80 backdrop-blur-sm shadow-xl shadow-primary/10">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <BookHeart className="h-8 w-8" />
          </div>
          <CardTitle className="font-headline text-3xl font-bold text-foreground">Recetas Saludables</CardTitle>
          <CardDescription>Acesse sua conta para ver seus ebooks.</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" required defaultValue="aluno@gymapp.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" required defaultValue="123456" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full font-bold">Entrar</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
