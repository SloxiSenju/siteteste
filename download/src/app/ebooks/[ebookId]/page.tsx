import { getEbookById } from '@/lib/documents';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type EbookPageProps = {
  params: {
    ebookId: string;
  };
};

export default function EbookPage({ params }: EbookPageProps) {
  const ebook = getEbookById(params.ebookId);

  if (!ebook) {
    notFound();
  }

  return (
    <div className="flex-1 animate-in fade-in-50 duration-500">
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-4 self-start pl-0">
            <Link href="/dashboard">
                <ArrowLeft className="mr-2" />
                Voltar para Ebooks
            </Link>
        </Button>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="md:col-span-1">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-6">
                {ebook.imageUrl && (
                <Image
                    src={ebook.imageUrl}
                    alt={ebook.title}
                    fill
                    className="object-cover"
                    data-ai-hint={ebook.imageHint}
                />
                )}
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2 leading-tight">
              {ebook.title}
            </h1>
            <p className="text-muted-foreground">
              {ebook.description}
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-[3/4] w-full bg-muted/30 rounded-2xl overflow-hidden border">
                <div className="prose prose-lg max-w-none w-full h-full" dangerouslySetInnerHTML={{ __html: ebook.content.replace('width="640"','width="100%"').replace('height="480"','height="100%"') }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
