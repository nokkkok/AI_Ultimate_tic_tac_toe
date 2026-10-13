import { gameModeOptions, type GameModeValue } from "@/types/gameMode";

interface Props {
    onNext: (mode: GameModeValue) => void;
}

export const GITHUB_REPO_URL =
    "https://github.com/paaw-potsawee/AI_Ultimate_tic_tac_toe";
export const PRESENTATION_VIDEO_URL = "https://youtu.be/UjTk1V3Qb2I";

const projectLinks = [
    {
        href: GITHUB_REPO_URL,
        label: "GitHub",
        icon: (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current sm:h-5 sm:w-5"
            >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
    },
    {
        href: PRESENTATION_VIDEO_URL,
        label: "Presentation Video",
        icon: (
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current sm:h-5 sm:w-5"
            >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
] as const;

const SelectMode = ({ onNext }: Props) => {
    return (
        <main className="flex w-full flex-1 flex-col bg-teal md:flex-row">
            <div
                className="relative flex w-full shrink-0 flex-col items-center justify-between border-b-[5px] border-black bg-peach px-3 py-7 md:w-[min(41vw,26.25rem)] md:border-r-[5px] md:border-b-0 md:px-2 md:py-10 lg:py-12"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
                    backgroundSize: "16px 16px",
                }}
            >
                <div className="mb-5 flex w-full justify-center sm:mb-6 md:mb-8 lg:mb-10">
                    <span
                        className="block max-w-full text-center font-sans text-5xl leading-tight font-extrabold tracking-tight italic filter-[drop-shadow(0px_2px_0px_#000000)_drop-shadow(0px_-1px_0px_#000000)_drop-shadow(1.5px_0px_0px_#000000)_drop-shadow(-1.5px_0px_0px_#000000)] sm:text-6xl md:text-[clamp(3.5rem,7.5vw,5rem)] md:leading-tight"
                        style={{
                            background:
                                "linear-gradient(135.11deg, #EFBF04 25.65%, #896D02 74.35%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Ultimate
                    </span>
                </div>

                {/* Tic Tac Toe */}
                <div className="flex w-full flex-row justify-center text-center font-sans text-6xl leading-[0.88] font-extrabold tracking-tight text-black italic sm:text-7xl md:flex-col md:text-[clamp(6rem,14vw,11.25rem)] md:leading-[0.9]">
                    <span>Tic</span>
                    <span>Tac</span>
                    <span>Toe</span>
                </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-4 px-4 py-8 sm:gap-5 sm:py-10 md:items-start md:gap-6 md:px-0 lg:gap-8">
                {gameModeOptions.map(({ value, label }) => (
                    <button
                        key={value}
                        type="button"
                        onClick={() => onNext(value)}
                        className="flex min-h-14 w-full max-w-xl items-center justify-center border-4 border-black bg-orange px-3 py-3 text-center font-sans text-xl leading-tight font-medium text-sunset-600 italic shadow-md transition-all hover:brightness-114 sm:min-h-16 sm:px-6 sm:text-2xl md:max-w-[34rem] md:rounded-r-2xl md:border-l-0 md:px-8 md:text-3xl xl:text-[40px]"
                    >
                        {label}
                    </button>
                ))}

                <nav
                    aria-label="Project links"
                    className="mt-2 flex flex-wrap items-center justify-center gap-3 md:mt-4 md:justify-start md:pl-8"
                >
                    {projectLinks.map(({ href, label, icon }) => (
                        <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-ocean-200 px-4 py-1.5 text-sm font-bold text-black shadow-md transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:ring-4 focus-visible:ring-white focus-visible:outline-none sm:text-base"
                        >
                            {icon}
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
        </main>
    );
};

export default SelectMode;
