import { ReactNode, forwardRef, ComponentProps, useState } from "react";

import { useMediaQuery } from "~/hooks/use-media-query";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";

interface Props {
  children: (props: { closeModal: () => void }) => ReactNode;
  triggerLabel: string;
  title?: string;
  description?: string;
}

const Trigger = forwardRef<HTMLButtonElement, ComponentProps<typeof Button>>(
  (props, ref) => {
    return <Button ref={ref} variant="default" {...props} />;
  }
);

Trigger.displayName = "ModalTrigger";

const Modal = ({ children, triggerLabel, title, description }: Props) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Trigger>{triggerLabel}</Trigger>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title || triggerLabel}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          {children({ closeModal: () => setOpen(false) })}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Trigger>{triggerLabel}</Trigger>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title || triggerLabel}</DrawerTitle>
          {description && (
            <DrawerDescription>
              Make changes to your profile here.
            </DrawerDescription>
          )}
        </DrawerHeader>
        {children({ closeModal: () => setOpen(false) })}
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

Modal.Trigger = Trigger;

export default Modal;
