
'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getContactMessages, ContactMessage } from '@/services/contact';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AdminMessagesPage() {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                setLoading(true);
                const items = await getContactMessages();
                setMessages(items);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch messages.");
            } finally {
                setLoading(false);
            }
        };
        fetchMessages();
    }, []);

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-headline">Contact Messages</h1>
                <p className="text-muted-foreground">Here are the messages submitted through your contact form.</p>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[200px]">Date</TableHead>
                                <TableHead className="w-[200px]">Name</TableHead>
                                <TableHead className="w-[250px]">Email</TableHead>
                                <TableHead>Service</TableHead>
                                <TableHead className="w-[50px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                    </Table>
                    {loading ? (
                        <Table>
                            <TableBody>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <TableRow key={i}>
                                        <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                                        <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : error ? (
                         <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center text-destructive py-12">{error}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    ) : messages.length === 0 ? (
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center text-muted-foreground py-12">No messages yet.</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    ) : (
                       <Accordion type="single" collapsible className="w-full">
                           {messages.map((message) => (
                               <AccordionItem value={message.id} key={message.id}>
                                    <AccordionTrigger className="hover:no-underline">
                                        <Table className="w-full">
                                            <TableBody>
                                                 <TableRow className="border-none">
                                                    <TableCell className="w-[200px] font-medium">{message.createdAt}</TableCell>
                                                    <TableCell className="w-[200px]">{message.name}</TableCell>
                                                    <TableCell className="w-[250px]">{message.email}</TableCell>
                                                    <TableCell><Badge variant="secondary">{message.service}</Badge></TableCell>
                                                    <TableCell className="w-[50px]"></TableCell>
                                                 </TableRow>
                                            </TableBody>
                                        </Table>
                                    </AccordionTrigger>
                                   <AccordionContent>
                                     <div className="p-4 bg-muted/50 rounded-md mx-4 mb-4">
                                        <p className="text-sm text-foreground">{message.message}</p>
                                     </div>
                                   </AccordionContent>
                               </AccordionItem>
                           ))}
                       </Accordion>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
