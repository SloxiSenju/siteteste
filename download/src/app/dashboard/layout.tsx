'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { BookHeart, Home, Calendar, User, Settings, LogOut, Library } from 'lucide-react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const menuItems = [
    { id: 'home', label: 'Início', icon: Home, href: '/dashboard' },
    { id: 'ebooks', label: 'Meus Ebooks', icon: Library, href: '/dashboard' },
    { id: 'schedule', label: 'Agenda', icon: Calendar, href: '/dashboard' },
    { id: 'profile', label: 'Meu Perfil', icon: User, href: '/dashboard' },
  ];

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" side="left" variant="inset">
        <SidebarHeader className="h-16 items-center justify-center p-0 group-data-[collapsible=icon]:hidden">
           <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
                <BookHeart className="h-6 w-6 text-primary" />
                <span className="text-foreground">Recetas</span>
            </Link>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  asChild
                  isActive={item.id === 'ebooks'}
                  tooltip={{ children: item.label, side: 'right' }}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex w-full cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-sidebar-accent">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://picsum.photos/seed/user-avatar/40/40" data-ai-hint="woman portrait"/>
                        <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start truncate group-data-[collapsible=icon]:hidden">
                        <span className="text-sm font-medium text-sidebar-foreground">Leitor</span>
                        <span className="text-xs text-sidebar-foreground/70">Ver Perfil</span>
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" align="start" className="w-56">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Configurações</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/login">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm md:hidden">
            <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
                <BookHeart className="h-6 w-6 text-primary" />
                <span className="text-foreground">Recetas</span>
            </Link>
            <SidebarTrigger />
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
