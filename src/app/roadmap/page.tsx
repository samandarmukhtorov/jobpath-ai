"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Lightbulb, Wrench, Rocket, CheckCircle, Circle, ArrowRight, Calendar, Target } from "lucide-react"

export default function RoadmapPage() {
  const stages = [
    {
      id: 1,
      stage: "Idea",
      title: "Идея",
      status: "completed",
      period: "Q1 2024",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      description: "Концептуализация и исследование проблемы",
      achievements: [
        "Проведено 50+ интервью с целевой аудиторией",
        "Анализ конкурентов и рыночных трендов",
        "Валидация проблемы и болей пользователей",
        "Разработка ценностного предложения",
        "Определение core features и MVP scope"
      ],
      metrics: [
        { label: "Интервью", value: "50+" },
        { label: "Опросы", value: "200+" },
        { label: "Гипотез", value: "30+" }
      ]
    },
    {
      id: 2,
      stage: "Prototype",
      title: "Прототип",
      status: "completed",
      period: "Q2 2024",
      icon: Wrench,
      color: "from-blue-500 to-cyan-500",
      description: "Создание первых прототипов и тестирование концепции",
      achievements: [
        "Дизайн-прототип в Figma с основными флоу",
        "Первая версия AI-модели для анализа навыков",
        "Landing page и pre-launch маркетинг",
        "Сбор waitlist (500+ пользователей)",
        "User testing и итерации на основе фидбека"
      ],
      metrics: [
        { label: "Прототипов", value: "5" },
        { label: "Тестов", value: "25+" },
        { label: "Waitlist", value: "500+" }
      ]
    },
    {
      id: 3,
      stage: "MVP",
      title: "MVP (Минимальный продукт)",
      status: "in-progress",
      period: "Q3 2024",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      description: "Разработка и запуск минимально жизнеспособного продукта",
      achievements: [
        "Разработка веб-платформы на Next.js + AI",
        "Интеграция GPT-4 для анализа навыков",
        "База данных профессий и roadmaps",
        "Парсинг вакансий с основных площадок",
        "Закрытая бета с первыми 100 пользователями"
      ],
      currentTasks: [
        "Оптимизация AI-моделей для точности",
        "Добавление генерации резюме",
        "Улучшение UX на основе фидбека",
        "Интеграция с API вакансий"
      ],
      metrics: [
        { label: "Features", value: "12" },
        { label: "Бета-users", value: "100" },
        { label: "AI точность", value: "85%" }
      ]
    },
    {
      id: 4,
      stage: "Launched",
      title: "Запуск",
      status: "planned",
      period: "Q4 2024",
      icon: Target,
      color: "from-green-500 to-emerald-500",
      description: "Полноценный запуск платформы для широкой аудитории",
      achievements: [
        "Публичный запуск платформы",
        "Маркетинговая кампания и PR",
        "Partnerships с образовательными платформами",
        "Мобильное приложение (iOS/Android)",
        "Масштабирование до 10,000+ пользователей"
      ],
      plannedFeatures: [
        "Персональный AI-карьерный коуч",
        "Интеграция с LinkedIn и GitHub",
        "Gamification и система достижений",
        "Комьюнити и нетворкинг функции",
        "Premium подписка с расширенными фичами"
      ],
      metrics: [
        { label: "Target users", value: "10K+" },
        { label: "Partners", value: "20+" },
        { label: "Revenue", value: "$50K MRR" }
      ]
    }
  ]

  const timeline = [
    { month: "Январь", event: "Исследование рынка" },
    { month: "Февраль", event: "User interviews" },
    { month: "Март", event: "Концепция и MVP план" },
    { month: "Апрель", event: "Дизайн-прототипы" },
    { month: "Май", event: "Тестирование концепции" },
    { month: "Июнь", event: "Разработка AI-модели" },
    { month: "Июль", event: "Разработка платформы" },
    { month: "Август", event: "Закрытая бета" },
    { month: "Сентябрь", event: "Итерации на основе фидбека" },
    { month: "Октябрь", event: "Публичный запуск" },
    { month: "Ноябрь", event: "Маркетинг и масштабирование" },
    { month: "Декабрь", event: "Мобильное приложение" }
  ]

  const getStatusIcon = (status: string) => {
    if (status === "completed") return <CheckCircle className="w-5 h-5 text-green-600" />
    if (status === "in-progress") return <Circle className="w-5 h-5 text-blue-600 animate-pulse" />
    return <Circle className="w-5 h-5 text-gray-400" />
  }

  const getStatusBadge = (status: string) => {
    if (status === "completed") return <Badge className="bg-green-600">Завершено</Badge>
    if (status === "in-progress") return <Badge className="bg-blue-600">В процессе</Badge>
    return <Badge variant="outline">Запланировано</Badge>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        <div className="container px-4 py-20 md:py-24 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Дорожная карта
            </h1>
            <p className="text-xl text-muted-foreground">
              Наш путь от идеи до успешного продукта
            </p>
          </div>
        </div>
      </section>

      {/* Main Roadmap */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {stages.map((stage, index) => (
              <div key={stage.id} className="relative">
                {/* Connector Line */}
                {index < stages.length - 1 && (
                  <div className="hidden md:block absolute left-[2.5rem] top-[5rem] w-0.5 h-[calc(100%+4rem)] bg-gradient-to-b from-border to-transparent" />
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon & Badge */}
                  <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-3">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg`}>
                      <stage.icon className="w-10 h-10 text-white" />
                    </div>
                    {getStatusBadge(stage.status)}
                  </div>

                  {/* Content */}
                  <Card className="flex-1 border-2">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-2xl">{stage.title}</CardTitle>
                            {getStatusIcon(stage.status)}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{stage.period}</span>
                          </div>
                        </div>
                        <div className="text-4xl font-bold text-muted-foreground/20">
                          {stage.stage}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">{stage.description}</p>

                      {/* Achievements */}
                      {stage.achievements && (
                        <div className="space-y-3">
                          <h4 className="font-semibold flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Достижения
                          </h4>
                          <ul className="space-y-2">
                            {stage.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Current Tasks */}
                      {stage.currentTasks && (
                        <div className="space-y-3">
                          <h4 className="font-semibold flex items-center gap-2">
                            <Circle className="w-4 h-4 text-blue-600 animate-pulse" />
                            Текущие задачи
                          </h4>
                          <ul className="space-y-2">
                            {stage.currentTasks.map((task, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Planned Features */}
                      {stage.plannedFeatures && (
                        <div className="space-y-3">
                          <h4 className="font-semibold flex items-center gap-2">
                            <Target className="w-4 h-4 text-purple-600" />
                            Запланированные фичи
                          </h4>
                          <ul className="space-y-2">
                            {stage.plannedFeatures.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <ArrowRight className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                        {stage.metrics.map((metric, i) => (
                          <div key={i} className="text-center">
                            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Timeline 2024</h2>
              <p className="text-lg text-muted-foreground">
                Помесячный план развития продукта
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {timeline.map((item, index) => (
                <Card key={index} className={`border-2 ${index <= 7 ? 'bg-blue-50 dark:bg-blue-950/20' : ''}`}>
                  <CardContent className="pt-6 text-center space-y-2">
                    <div className={`font-bold ${index <= 7 ? 'text-blue-600' : 'text-muted-foreground'}`}>
                      {item.month}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.event}
                    </p>
                    {index <= 7 && (
                      <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                    )}
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
              Присоединяйтесь к нашему путешествию
            </h2>
            <p className="text-lg text-blue-100">
              Станьте частью будущего карьерного консалтинга
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Начать сейчас
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10" asChild>
                <Link href="/implementation">
                  План реализации
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
