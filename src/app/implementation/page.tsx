import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Code, Database, Brain, Sparkles, Zap, Shield, ArrowRight, CheckCircle, Layers, Cloud, GitBranch } from "lucide-react"

export default function ImplementationPage() {
  const phases = [
    {
      phase: "Фаза 1",
      title: "Исследование и проектирование",
      period: "1-2 месяца",
      description: "Глубокий анализ требований и архитектурное проектирование",
      tasks: [
        "Детальный анализ пользовательских сценариев",
        "Проектирование системной архитектуры",
        "Выбор технологического стека",
        "Проектирование базы данных",
        "Создание технической документации",
        "Security & compliance анализ"
      ],
      deliverables: [
        "Техническая спецификация",
        "Архитектурные диаграммы",
        "Database schema",
        "API documentation draft"
      ]
    },
    {
      phase: "Фаза 2",
      title: "Разработка Core Features",
      period: "3-4 месяца",
      description: "Создание основного функционала платформы",
      tasks: [
        "Настройка dev/staging/production окружений",
        "Разработка backend API (аутентификация, профили, навыки)",
        "Интеграция AI-моделей для анализа навыков",
        "Разработка frontend (Next.js)",
        "Система управления пользователями",
        "Интеграция с вакансийными площадками"
      ],
      deliverables: [
        "Working MVP",
        "User authentication system",
        "Skills analysis module",
        "Job matching engine"
      ]
    },
    {
      phase: "Фаза 3",
      title: "AI Integration & Optimization",
      period: "2-3 месяца",
      description: "Интеграция и оптимизация AI-компонентов",
      tasks: [
        "Fine-tuning AI моделей для карьерного консалтинга",
        "Разработка системы рекомендаций",
        "Генерация персональных roadmaps",
        "AI-powered resume builder",
        "Оптимизация точности и скорости",
        "A/B тестирование различных моделей"
      ],
      deliverables: [
        "Production-ready AI models",
        "Recommendation system",
        "Roadmap generator",
        "Resume builder"
      ]
    },
    {
      phase: "Фаза 4",
      title: "Testing & Launch",
      period: "1-2 месяца",
      description: "Тестирование, оптимизация и запуск",
      tasks: [
        "Комплексное тестирование (unit, integration, e2e)",
        "Performance optimization",
        "Security audit",
        "Beta testing с реальными пользователями",
        "Сбор и анализ фидбека",
        "Подготовка к production deployment"
      ],
      deliverables: [
        "Tested platform",
        "Performance reports",
        "User feedback analysis",
        "Production deployment"
      ]
    }
  ]

  const techStack = {
    frontend: [
      { name: "Next.js 15", description: "React framework с SSR/SSG" },
      { name: "TypeScript", description: "Type-safe разработка" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" },
      { name: "Shadcn/UI", description: "Компонентная библиотека" },
      { name: "React Query", description: "Data fetching и кэширование" },
      { name: "Zustand", description: "State management" }
    ],
    backend: [
      { name: "Node.js", description: "JavaScript runtime" },
      { name: "FastAPI (Python)", description: "Для AI/ML endpoints" },
      { name: "PostgreSQL", description: "Основная БД" },
      { name: "Redis", description: "Кэширование и очереди" },
      { name: "Prisma", description: "ORM для работы с БД" },
      { name: "GraphQL", description: "API layer" }
    ],
    ai: [
      { name: "OpenAI GPT-4", description: "Анализ навыков и генерация" },
      { name: "LangChain", description: "LLM orchestration" },
      { name: "Pinecone", description: "Vector database для embeddings" },
      { name: "TensorFlow", description: "Custom ML models" },
      { name: "Hugging Face", description: "Pre-trained models" },
      { name: "scikit-learn", description: "ML utilities" }
    ],
    infrastructure: [
      { name: "Vercel", description: "Frontend hosting" },
      { name: "AWS", description: "Backend infrastructure" },
      { name: "Docker", description: "Containerization" },
      { name: "GitHub Actions", description: "CI/CD pipeline" },
      { name: "Supabase", description: "Auth & real-time features" },
      { name: "Cloudflare", description: "CDN и DDoS protection" }
    ],
    monitoring: [
      { name: "Sentry", description: "Error tracking" },
      { name: "Mixpanel", description: "Product analytics" },
      { name: "LogRocket", description: "Session replay" },
      { name: "Grafana", description: "Monitoring dashboards" },
      { name: "DataDog", description: "APM & logs" }
    ]
  }

  const aiTools = [
    {
      name: "GPT-4 Turbo",
      category: "Language Model",
      usage: "Анализ навыков, генерация рекомендаций, создание резюме",
      icon: Brain
    },
    {
      name: "LangChain",
      category: "LLM Framework",
      usage: "Создание сложных AI-пайплайнов и chain-операций",
      icon: Layers
    },
    {
      name: "Pinecone",
      category: "Vector Database",
      usage: "Семантический поиск вакансий и профессий",
      icon: Database
    },
    {
      name: "Embeddings API",
      category: "Text Embeddings",
      usage: "Векторизация навыков и требований вакансий",
      icon: Zap
    },
    {
      name: "Fine-tuned Models",
      category: "Custom Models",
      usage: "Специализированные модели для карьерного консалтинга",
      icon: Sparkles
    },
    {
      name: "RAG Pipeline",
      category: "Retrieval System",
      usage: "Контекстуальные ответы на основе карьерных данных",
      icon: GitBranch
    }
  ]

  const architecture = [
    {
      layer: "Presentation Layer",
      description: "Next.js frontend с SSR для SEO и performance",
      components: ["React Components", "Server Components", "Client Components", "API Routes"]
    },
    {
      layer: "API Layer",
      description: "RESTful + GraphQL API для гибкой работы с данными",
      components: ["GraphQL Schema", "REST Endpoints", "WebSocket для real-time", "Rate Limiting"]
    },
    {
      layer: "Business Logic Layer",
      description: "Core business logic и AI orchestration",
      components: ["Skills Analyzer", "Job Matcher", "Roadmap Generator", "Resume Builder"]
    },
    {
      layer: "AI/ML Layer",
      description: "AI models и ML pipelines",
      components: ["GPT-4 Integration", "Custom Models", "Vector Search", "Recommendation Engine"]
    },
    {
      layer: "Data Layer",
      description: "Управление данными и persistence",
      components: ["PostgreSQL", "Redis Cache", "S3 Storage", "Vector DB"]
    },
    {
      layer: "Infrastructure Layer",
      description: "Cloud infrastructure и DevOps",
      components: ["AWS Services", "Docker Containers", "CI/CD Pipeline", "Monitoring"]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        <div className="container px-4 py-20 md:py-24 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              План реализации
            </h1>
            <p className="text-xl text-muted-foreground">
              Детальный план разработки, технологии и AI-инструменты
            </p>
          </div>
        </div>
      </section>

      {/* Development Phases */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Этапы разработки</h2>
              <p className="text-lg text-muted-foreground">
                Пошаговый план реализации от идеи до запуска
              </p>
            </div>

            <div className="space-y-8">
              {phases.map((phase, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="text-base">{phase.phase}</Badge>
                          <CardTitle className="text-xl">{phase.title}</CardTitle>
                        </div>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="font-semibold">Длительность:</span> {phase.period}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{phase.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Задачи:</h4>
                        <ul className="space-y-2">
                          {phase.tasks.map((task, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Deliverables:</h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <ArrowRight className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Технологический стек</h2>
              <p className="text-lg text-muted-foreground">
                Современные технологии для надёжной и масштабируемой платформы
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-600" />
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {techStack.frontend.map((tech, i) => (
                    <div key={i} className="space-y-1">
                      <div className="font-semibold text-sm">{tech.name}</div>
                      <div className="text-xs text-muted-foreground">{tech.description}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-green-600" />
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {techStack.backend.map((tech, i) => (
                    <div key={i} className="space-y-1">
                      <div className="font-semibold text-sm">{tech.name}</div>
                      <div className="text-xs text-muted-foreground">{tech.description}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    AI/ML
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {techStack.ai.map((tech, i) => (
                    <div key={i} className="space-y-1">
                      <div className="font-semibold text-sm">{tech.name}</div>
                      <div className="text-xs text-muted-foreground">{tech.description}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-orange-600" />
                    Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {techStack.infrastructure.map((tech, i) => (
                    <div key={i} className="space-y-1">
                      <div className="font-semibold text-sm">{tech.name}</div>
                      <div className="text-xs text-muted-foreground">{tech.description}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-red-600" />
                    Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {techStack.monitoring.map((tech, i) => (
                    <div key={i} className="space-y-1">
                      <div className="font-semibold text-sm">{tech.name}</div>
                      <div className="text-xs text-muted-foreground">{tech.description}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-600" />
                    И многое другое
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Используем лучшие инструменты для каждой задачи
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div>• Testing: Jest, Playwright</div>
                    <div>• API: Postman, Swagger</div>
                    <div>• Design: Figma, Framer</div>
                    <div>• Project: Jira, Notion</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">AI инструменты и решения</h2>
              <p className="text-lg text-muted-foreground">
                Передовые AI технологии для точных карьерных рекомендаций
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiTools.map((tool, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold">{tool.name}</h3>
                        <Badge variant="secondary" className="text-xs">{tool.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{tool.usage}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Системная архитектура</h2>
              <p className="text-lg text-muted-foreground">
                Многослойная архитектура для масштабируемости и надёжности
              </p>
            </div>

            <div className="space-y-4">
              {architecture.map((layer, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                              {index + 1}
                            </div>
                            <h3 className="font-bold text-lg">{layer.layer}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground pl-11">{layer.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 pl-11">
                        {layer.components.map((component, i) => (
                          <Badge key={i} variant="outline">{component}</Badge>
                        ))}
                      </div>
                    </div>
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
              Готовы увидеть результат?
            </h2>
            <p className="text-lg text-blue-100">
              Начните использовать JobPath AI уже сегодня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Попробовать бесплатно
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10" asChild>
                <Link href="/">
                  На главную
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
