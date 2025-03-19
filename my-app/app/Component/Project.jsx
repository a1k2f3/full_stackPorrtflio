import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Link } from 'lucide-react';
const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description:
      'A fully functional e-commerce platform with user authentication, product listings, and payment integration.',
    image: '/images/ecommerce.jpg',
    link: 'https://github.com/a1k2f3/ShopOnline-front-end.git',
  },
  {
    id: 2,
    title: 'Chat Application',
    description:
      'A real-time chat application with private messaging and online status indicators.',
    image: 'C:\webdevolpment project\portfolo\webengenieringproject\backend\full_stackPorrtflio\my-app\public\image.png',
    link: 'https://github.com/a1k2f3/chat_app3.git',
  },
  {
    id: 3,
    title: 'Student manegment system',
    description:
      'A responsive portfolio website showcasing my projects and skills, built using Next.js.',
    image: '/images/portfolio.jpg',
    link: 'https://github.com/a1k2f3/Student_manegment_System.git',
  },
  {
    id: 4,
    title: 'social media app backend',
    description:
      'A socailmedia app backend iwhich user can create an acount and add the post user can saerch the user and user can comment on post jwt authentication, built using express.js.',
    image: '/images/portfolio.jpg',
    link: 'https://github.com/a1k2f3/socialmedia.git',
  },
  {
    id: 4,
    title: 'portfolio',
    description:
      'A responsive portfolio website showcasing my projects and skills, built using Next.js.',
    image: '/images/portfolio.jpg',
    link: 'https://github.com/a1k2f3/full_stackPorrtflio.git',
  },
  {
    id: 4,
    title: 'Taskmanegment App',
    description:
      'A responsive   in which user can see the task and submit th task and admin can asin the task to the user  and  create and delet the task, built using Next.js.',
    image: '/images/portfolio.jpg',
    link: 'https://github.com/a1k2f3/full_stackPorrtflio.git',
  },

];
const ProjectShowcase = () => {
  return (
    <section id="project">
      <div className="container mx-auto py-10">
        <h2 className="text-center text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg">
              <CardHeader>
                <Image
                  src={project.image}
                  // alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="mt-4 text-xl font-semibold">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default">View Project</Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
