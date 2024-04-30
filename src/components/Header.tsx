import {
	FileText,
	EnvelopeOpen,
	GithubLogo,
	LinkedinLogo,
} from "@phosphor-icons/react";

export default function Header() {
	return (
		<header className="flex items-baseline justify-between">
			<a
				href="/"
				className="blox w-max font-pixel text-3xl text-teal-700"
			>
				Lucas Castro
			</a>
			<div className="flex items-center gap-x-3 sm:gap-x-2">
				<div className="block relative group">
					<a
						href="mailto:hello@lucasamonrc.dev"
						className="relative z-10"
					>
						<EnvelopeOpen
							weight="fill"
							size="1.25rem"
							className="fill-gray-400 hover:fill-teal-600 transition-colors"
						/>
					</a>
					<div className="absolute top-0 -right-1 hidden group-hover:block pt-[1.3rem]">
						<div className="bg-gray-200 px-2 py-0.5 rounded-md">
							<p className="text-sm font-medium">
								hello@lucasamonrc.dev
							</p>
						</div>
					</div>
				</div>
				<a href="https://linkedin.com/in/lucasamonrc">
					<LinkedinLogo
						weight="fill"
						size="1.25rem"
						className="fill-gray-400 hover:fill-teal-600 transition-colors"
					/>
				</a>
				<a href="https://github.com/lucasamonrc">
					<GithubLogo
						weight="fill"
						size="1.25rem"
						className="fill-gray-400 hover:fill-teal-600 transition-colors"
					/>
				</a>
				<a href="https://standardresume.co/r/lucasamonrc">
					<FileText
						weight="fill"
						size="1.25rem"
						className="fill-gray-400 hover:fill-teal-600 transition-colors"
					/>
				</a>
			</div>
		</header>
	);
}
