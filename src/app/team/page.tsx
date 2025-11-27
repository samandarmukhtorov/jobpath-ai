import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Github, Linkedin, Mail, Code, Brain, Database, Palette, TrendingUp, CheckCircle, Rocket, Users, Target, Award } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Алексей Петров",
      role: "CEO & AI Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      skills: ["Machine Learning", "Python", "TensorFlow", "NLP"],
      stack: ["GPT-4", "LangChain", "FastAPI"],
      links: {
        github: "#",
        linkedin: "#",
        email: "alexey@jobpath.ai"
      },
      description: "10+ лет в AI и ML, опыт в крупных tech-компаниях"
    },
    {
      name: "Мария Соколова",
      role: "CTO & Full-Stack Developer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      skills: ["Next.js", "React", "Node.js", "PostgreSQL"],
      stack: ["TypeScript", "Prisma", "Vercel"],
      links: {
        github: "#",
        linkedin: "#",
        email: "maria@jobpath.ai"
      },
      description: "Эксперт в разработке масштабируемых веб-приложений"
    },
    {
      name: "Дмитрий Иванов",
      role: "Data Scientist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      skills: ["Data Analysis", "Python", "SQL", "Statistics"],
      stack: ["Pandas", "Scikit-learn", "Jupyter"],
      links: {
        github: "#",
        linkedin: "#",
        email: "dmitry@jobpath.ai"
      },
      description: "Специалист по анализу карьерных данных и трендов рынка"
    },
    {
      name: "Елена Новикова",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      skills: ["UI Design", "UX Research", "Figma", "Prototyping"],
      stack: ["Figma", "Adobe XD", "Framer"],
      links: {
        github: "#",
        linkedin: "#",
        email: "elena@jobpath.ai"
      },
      description: "Создаю интуитивные интерфейсы, которые любят пользователи"
    },
    {
      name: "Сергей Михайлов",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      skills: ["Product Strategy", "Agile", "Analytics", "User Research"],
      stack: ["Jira", "Mixpanel", "Notion"],
      links: {
        github: "#",
        linkedin: "#",
        email: "sergey@jobpath.ai"
      },
      description: "Строю продукты, которые решают реальные проблемы"
    },
    {
      name: "Анна Волкова",
      role: "Career Coach & Expert",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      skills: ["Career Coaching", "HR", "Psychology", "Mentoring"],
      stack: ["LinkedIn", "Indeed", "Glassdoor"],
      links: {
        github: "#",
        linkedin: "#",
        email: "anna@jobpath.ai"
      },
      description: "15+ лет помогаю людям находить своё призвание"
    }
  ]

  const capabilities = [
    {
      icon: Brain,
      title: "Экспертиза в AI/ML",
      description: "Наша команда имеет глубокие знания в области искусственного интеллекта, машинного обучения и обработки естественного языка. Мы использовали передовые модели для анализа карьерных данных.",
      highlights: ["GPT-4 API", "Custom ML Models", "NLP Pipeline"]
    },
    {
      icon: Code,
      title: "Сильная техническая база",
      description: "Мы строим масштабируемые, производительные и безопасные системы, используя современный стек технологий и лучшие практики разработки.",
      highlights: ["Next.js 15", "TypeScript", "PostgreSQL", "Microservices"]
    },
    {
      icon: Database,
      title: "Работа с Big Data",
      description: "Обработка и анализ миллионов вакансий, профилей и карьерных траекторий для точных рекомендаций и прогнозов.",
      highlights: ["Data Pipeline", "ETL процессы", "Real-time Analytics"]
    },
    {
      icon: Palette,
      title: "UX/UI Excellence",
      description: "Создаём интуитивные и красивые интерфейсы, которые делают сложные AI-инструменты доступными для каждого пользователя.",
      highlights: ["User Research", "A/B Testing", "Design Systems"]
    },
    {
      icon: TrendingUp,
      title: "Понимание рынка труда",
      description: "Глубокая экспертиза в карьерном консалтинге и HR позволяет нам создавать по-настоящему полезные решения для пользователей.",
      highlights: ["Industry Analysis", "Career Trends", "Skills Mapping"]
    },
    {
      icon: Rocket,
      title: "Опыт запуска продуктов",
      description: "Команда успешно запускала продукты от идеи до масштабирования, знаем как сделать продукт, который будут использовать.",
      highlights: ["MVP Development", "Product-Market Fit", "Growth Hacking"]
    }
  ]

  const achievements = [
    { icon: Users, value: "50K+", label: "Пользователей в бета-версии" },
    { icon: Target, value: "92%", label: "Точность AI рекомендаций" },
    { icon: Award, value: "15+", label: "Партнёров-работодателей" },
    { icon: TrendingUp, value: "85%", label: "Пользователи нашли работу" }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        <div className="container px-4 py-20 md:py-24 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Наша команда
            </h1>
            <p className="text-xl text-muted-foreground">
              Профессионалы, которые строят будущее карьерного консалтинга с помощью AI
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Познакомьтесь с командой</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Мы — команда экспертов из разных областей, объединённых одной целью
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-all">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="relative">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{member.name}</h3>
                        <p className="text-sm text-primary font-medium">{member.role}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {member.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-2">Навыки:</p>
                        <div className="flex flex-wrap gap-1">
                          {member.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-2">Стек:</p>
                        <div className="flex flex-wrap gap-1">
                          {member.stack.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-center gap-3 pt-2">
                        <a href={member.links.github} className="text-muted-foreground hover:text-primary transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                        <a href={member.links.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={`mailto:${member.links.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Team */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Почему наша команда способна решить эту задачу
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Уникальное сочетание технической экспертизы и глубокого понимания карьерного консалтинга
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <capability.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{capability.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {capability.description}
                    </p>
                    <div className="space-y-2">
                      {capability.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Reasons */}
            <Card className="border-2 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-center">Наши преимущества</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Междисциплинарный подход</p>
                          <p className="text-sm text-muted-foreground">
                            Объединяем AI, data science, UX и HR-экспертизу
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Опыт в крупных компаниях</p>
                          <p className="text-sm text-muted-foreground">
                            Работали в Google, Yandex, Mail.ru, Sber
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Proven track record</p>
                          <p className="text-sm text-muted-foreground">
                            Запускали успешные продукты с миллионами пользователей
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Глубокое понимание проблемы</p>
                          <p className="text-sm text-muted-foreground">
                            Сами прошли через выбор карьеры и поиск работы
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Focus on user value</p>
                          <p className="text-sm text-muted-foreground">
                            Создаём продукт для пользователей, а не для инвесторов
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Agile & fast execution</p>
                          <p className="text-sm text-muted-foreground">
                            Быстро тестируем гипотезы и адаптируемся к фидбеку
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Наши достижения</h2>
              <p className="text-lg text-muted-foreground">
                Результаты, которые говорят сами за себя
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-2 text-center">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {achievement.value}
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Хотите присоединиться к нашей команде?
            </h2>
            <p className="text-lg text-blue-100">
              Мы всегда ищем талантливых людей, которые хотят менять мир к лучшему
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Вакансии
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10" asChild>
                <Link href="/roadmap">
                  Дорожная карта
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
