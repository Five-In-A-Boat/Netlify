'use client';

export default function LiveChatButton() {
  function openChat() {
    (window as Window & { $crisp?: unknown[] }).$crisp?.push(['do', 'chat:open']);
  }

  return (
    <button
      type="button"
      onClick={openChat}
      className="px-8 py-4 border-2 border-white text-white font-heading font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-teal-dark transition-all duration-300"
    >
      Live Chat
    </button>
  );
}
