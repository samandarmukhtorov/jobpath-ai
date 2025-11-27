import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Sparkles, Target, TrendingUp, MapPin, FileText, ArrowRight, Brain, Lightbulb, Rocket, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="container relative px-4 py-24 md:py-32 md:px-6">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              AI-платформа нового поколения
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              JobPath AI
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Подбор профессии и вакансий по навыкам с помощью искусственного интеллекта
            </p>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Мы помогаем молодёжи найти своё призвание, построить карьерный путь и найти работу мечты
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8">
                Начать бесплатно
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/problem-solution">
                  Узнать больше
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Проблема</h2>
            <p className="text-xl text-muted-foreground">
              Молодёжь не знает, какую профессию выбрать, какие навыки нужны и как развиваться
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="border-2">
                <CardContent className="pt-6 space-y-2 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <Target className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="font-semibold">Нет ясности</h3>
                  <p className="text-sm text-muted-foreground">
                    Сложно выбрать направление среди тысяч профессий
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="pt-6 space-y-2 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="font-semibold">Нет плана</h3>
                  <p className="text-sm text-muted-foreground">
                    Непонятно, какие навыки нужно развивать
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="pt-6 space-y-2 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h3 className="font-semibold">Нет вакансий</h3>
                  <p className="text-sm text-muted-foreground">
                    Трудно найти подходящие возможности
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Решение</h2>
            <p className="text-xl text-muted-foreground">
              AI-платформа, которая анализирует ваши навыки и строит персональный путь к успеху
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Анализ навыков</h3>
                <p className="text-sm text-muted-foreground">
                  ИИ оценивает ваши текущие компетенции и определяет сильные стороны
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Профессии будущего</h3>
                <p className="text-sm text-muted-foreground">
                  Предлагаем актуальные направления на основе трендов рынка
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Roadmap развития</h3>
                <p className="text-sm text-muted-foreground">
                  Составляем пошаговый план обучения и карьерного роста
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Подбор вакансий</h3>
                <p className="text-sm text-muted-foreground">
                  Находим идеальные позиции, соответствующие вашему профилю
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Генерация резюме</h3>
                <p className="text-sm text-muted-foreground">
                  Создаём профессиональное резюме за считанные минуты
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Постоянная поддержка</h3>
                <p className="text-sm text-muted-foreground">
                  Сопровождаем на всех этапах карьерного пути
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Начните свой путь к успешной карьере
            </h2>
            <p className="text-lg text-blue-100">
              Присоединяйтесь к тысячам пользователей, которые уже нашли своё призвание
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Попробовать бесплатно
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10" asChild>
                <Link href="/team">
                  Узнать о команде
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