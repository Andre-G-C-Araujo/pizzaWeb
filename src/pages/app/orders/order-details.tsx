import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from "@/components/ui/table";

export const OrderDatails = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido uehguydhegbfuyapfbuiarf</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                Andre Garcia Araujo
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                (19) 8 8888-8889
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Email</TableCell>
              <TableCell className="flex justify-end">
                andre@email.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Realizado</TableCell>
              <TableCell className="flex justify-end">há 3 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead className="text-right">Qtd.</TableHead>
            <TableHead className="text-right">Preço</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Pepperoni Familia</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">RS70,00</TableCell>
              <TableCell className="text-right">RS140,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Muzzarela Pequena</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">RS35,00</TableCell>
              <TableCell className="text-right">RS35,00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              {/* colSpan = qtd de espaço ocupado*/}
              <TableCell colSpan={3}> Total do pedido</TableCell>
              <TableCell className="text-right font-medium">RS175,00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
};
