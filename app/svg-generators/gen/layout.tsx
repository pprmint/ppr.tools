export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<div>{children}</div>
            <div className="flex whitespace-nowrap overflow-x-auto bg-neutral-900">
                
            </div>
		</main>
	);
}
