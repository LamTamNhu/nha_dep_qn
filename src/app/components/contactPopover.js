'use client';
import * as Popover from '@radix-ui/react-popover';
import ContactForm from './ContactForm';

export default function ContactPopover({trigger}) {
    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                {trigger}
            </Popover.Trigger>

            <Popover.Portal>
                <Popover.Content
                    side="left" // or "top", "bottom", "right"
                    sideOffset={12}
                    align="end"
                    className="bg-transparent shadow-xl"
                >
                    <ContactForm/>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}
