import { useEffect, useRef, useState } from 'react'


const navItems = ['About', 'Loadout', 'Biography', 'Elite Skins' ];

function Navbar() {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isAudioIndicatorActive, setIsAudioIndicatorActive] = useState(false);
    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);
        setIsAudioIndicatorActive((prev) => !prev);
    };

    useEffect(() => {
        if (isAudioPlaying) {
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying]); 

    return (
        <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex size-full items-center justify-between p-4'>
                    <div className='flex items-center gap-7'>
                        <img src="/img/logo.png" alt="logo" className='w-10' />


                    </div>

                    <div className='flex h-full items-center'>
                        <div className='hidden md:block'>
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className='nav-hover-btn'
                                >
                                    {item}
                                </a>
                            ))}
                        </div>


                        <button 
                            className='ml-10 flex items-center space-x-0.5' 
                            onClick={toggleAudioIndicator}
                        >
                            <audio ref={audioElementRef} src="/audio/loop.mp3" className="hidden" loop />

                            <div className="audio-indicator flex gap-1">
                                {[1, 2, 3, 4, 5].map((bar) => (
                                    <div 
                                        key={bar} 
                                        className={`indicator-line ${isAudioIndicatorActive ? 'active' : ''}`} 
                                        style={{ animationDelay: `${bar * 0.1}s` }}
                                    />
                                ))}
                            </div>
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;