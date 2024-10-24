import { BarChartIcon, DollarSign, Settings, TrendingUp, Wallet } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const Sidebar = () => {
    const navLinks = [{
        id: 1,
        label: 'Financial Health',
        href: '/',
        icon: <BarChartIcon className='size-4 mr-2' />
    }, {
        id: 2,
        label: 'My Wallet',
        href: '/wallet',
        icon: <Wallet className='size-4 mr-2' />
    }, {
        id: 3,
        label: 'Investments',
        href: '/investments',
        icon: <TrendingUp className='size-4 mr-2' />
    }, {
        id: 4,
        label: 'Settings',
        href: '/settings',
        icon: <Settings className='size-4 mr-2' />
    }];

    return (
        <aside className="bg-zinc-800 w-64 p-6">
            <Link href="/" className="mb-8 flex items-center">
                <div className='size-8 rounded-full bg-green-500 mr-2 flex items-center justify-center'>
                    <DollarSign className='size-5 text-white' />
                </div>
                <h1 className='text-2xl font-bold'>CHA-CHING</h1>
            </Link>
            <nav>
                {navLinks.map((link) => (
                    <Link key={link.id} href={link.href} passHref className="hover:text-gray-300">
                        <Button variant="ghost" className='w-full justify-start mb-2'>
                            {link.icon}
                            {link.label}
                        </Button>
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;