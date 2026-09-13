import chefclaude from "../assets/chef-claude.png"

export default function Header() {
    return (
        <header className="flex justify-center items-center gap-2 h-[54px] border-b border-gray-200 shadow-sm">
            <img 
                src={chefclaude} 
                alt="Chef Claude" 
                className="w-7 h-auto"
            />
            <h1 className="text-lg font-medium">
                Chef Claude
            </h1>
        </header>
    )
}