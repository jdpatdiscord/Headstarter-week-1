'use server';

const fs = require('fs');

const {glob, globSync} = require('glob');
const {BlogEntry} = require('./blogentry.tsx');

export default async function Page() 
{
    const pages = globSync('./app/blog/posts/**/page.tsx', { });
    const icons = globSync('./public/static/**/*_blogicon_128.png', { });
    const descriptors = globSync('./app/blog/posts/**/descriptor.json', { });

    const fileInfo = pages.map((filePath) => {
        return fs.statSync(filePath);
    });

    const data = [];

    for (let i = 0; i < pages.length; ++i)
    {
        data.push({
            created: new Date(fileInfo[i].ctimeMs).toString(),
            path: pages[i], 
            icon: icons[i], 
            descriptor: JSON.parse(fs.readFileSync(descriptors[i], 'utf8')),
        });
    }

    return (
    <div>
        <div className="flex flex-col m-2 pl-1 outline outline-2">
            <div className="w-full bg-black text-white min-h-8 max-h-8">
                <p className="text-left p-1">&nbsp; {pages.length} blog posts</p>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-2">
        {
            data.map((blogDescriptor) => 
            {
                let path = blogDescriptor.path;
                let icon = blogDescriptor.icon;
                let descriptor = blogDescriptor.descriptor;
                let dateCreation = blogDescriptor.created;

                path = path.replaceAll("\\", "/");
                path = path.replace("app/", "");
                path = path.replace("/page.tsx", "");
                path = "/" + path;
                icon = icon.replaceAll("\\", "/");
                icon = icon.replace("public/", "");
                return <BlogEntry blogRef={path} icon={icon} title={descriptor.title} description={descriptor.description} created={dateCreation}/>
            })
        }
        </div>
    </div>
    );
}