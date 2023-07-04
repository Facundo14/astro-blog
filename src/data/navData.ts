export interface NavItem {
    name: string;
    path: string;
}

const navItems: NavItem[] = [
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Blog',
        path: '/blog'
    }
]

export default navItems;