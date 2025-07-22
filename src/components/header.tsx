import logo from '@assets/logo.svg'
import content from '../config/common'

export default function Header()
{
    return (
        <>
            <nav className="bg-white sticky top-0 z-50">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center">
                            <img src={logo} className="logo " alt={content.info.title} />
                        </div>

                        <div className="mt-4 md:mt-0">
                            <div className="flex flex-wrap gap-4 md:gap-6">
                                {content.header.content.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href || "404"}
                                        className="text-gray-700 hover:text-blue-600 font-medium"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}