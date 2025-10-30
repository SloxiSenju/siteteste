import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { getEbookById } from '@/lib/documents';

type Ebook = {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
};

const ebookIds = [
  'recetas-dulces',
  'coberturas-y-salsas',
  'postres-rapidos',
  'helados-y-paletas',
];

export default function DashboardPage() {
  const ebooks: Ebook[] = ebookIds.map(id => {
    const ebookData = getEbookById(id);
    return {
      id: ebookData!.id,
      name: ebookData!.title,
      description: ebookData!.description.split('.')[0],
      imageUrl: ebookData!.imageUrl,
      imageHint: ebookData!.imageHint
    }
  });

  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 animate-in fade-in-50 duration-500">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Meus Ebooks</h1>
        <p className="text-muted-foreground">Sua biblioteca de receitas saudáveis.</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ebooks.map((ebook) => (
          <EbookCard key={ebook.id} ebook={ebook} />
        ))}
      </div>
    </main>
  );
}

function EbookCard({ ebook }: { ebook: Ebook }) {
  return (
    <Card className="flex flex-col border-secondary hover:border-primary/50 transition-all duration-300 bg-card/50 group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative aspect-[3/4] w-full">
            {ebook.imageUrl && (
                <Image
                    src={ebook.imageUrl}
                    alt={ebook.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={ebook.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
                <CardTitle className="text-xl font-bold text-white leading-tight">
                    {ebook.name}
                </CardTitle>
                <p className="text-sm text-white/80">{ebook.description}</p>
            </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-end p-4">
        <Button asChild variant="outline" className="w-full border-primary/30 hover:bg-primary/10 hover:text-foreground font-bold">
            <Link href={`/ebooks/${ebook.id}`}>
                Abrir Ebook <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
