'use client';
import * as Popover from '@radix-ui/react-popover';
import ContactForm from '@/components/ContactForm';

export default function ContactPopover({ trigger }) {
    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                {trigger}
            </Popover.Trigger>

            <Popover.Portal>
                <Popover.Content
                    side="left"
                    align="end"
                    sideOffset={12}
                    avoidCollisions
                    collisionPadding={16}
                    className="z-50 w-auto rounded-xl shadow-2xl overflow-y-auto max-h-[90vh] scale-90 bg-white"
                >
                    <div className="p-6">
                        <ContactForm isPopover />
                    </div>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}
