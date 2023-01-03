import { createEffect } from "effector";
import { LinkedInCssSelector } from "../../shared/enums/LinkedInCssSelector";

export const confirmSendInviteDialog = createEffect(
	() =>
		new Promise((resolve) => {
			let attempts = 0;

			const interval = setInterval(() => {
				const notesButton = document.querySelector<HTMLButtonElement>(LinkedInCssSelector.AddNotesButtonFromSendInviteModal);

				let message = `
					Hi, I am Taimour Ali, a Fullstack Javascript developer, having a vast industry experience, mainly on Angular, Nodejs and also on React.
					Thank you.`;

				if (message) {
					notesButton?.click();
					const txtArea = document.querySelector<HTMLButtonElement>(LinkedInCssSelector.CustomMessageTextArea);
					if (txtArea) {
						txtArea.value = message;
					}

					const sendButton = document.querySelector<HTMLButtonElement>(LinkedInCssSelector.SendButtonFromSendInviteModal);
					
					setTimeout(() => {
						if(sendButton) {
							sendButton.disabled = false;
						}
						sendButton?.click();
						if (sendButton || ++attempts > 5) {
							clearInterval(interval);
							resolve(null);
						}
					}, 500);
				} else {
					const sendButton = document.querySelector<HTMLButtonElement>(LinkedInCssSelector.SendButtonFromSendInviteModal);

					sendButton?.click();
					if (sendButton || ++attempts > 5) {
						clearInterval(interval);
						resolve(null);
					}
				}

				

			}, 500);
		})
);
