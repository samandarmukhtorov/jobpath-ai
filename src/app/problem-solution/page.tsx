import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Brain, Target, TrendingUp, MapPin, FileText, Users, Zap, BarChart, CheckCircle, ArrowRight } from "lucide-react"

export default function ProblemSolutionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-red-900/20">
        <div className="container px-4 py-20 md:py-24 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Проблема → Решение
            </h1>
            <p className="text-xl text-muted-foreground">
              Как JobPath AI помогает молодёжи найти своё призвание и построить успешную карьеру
            </p>
          </div>
        </div>
      </section>

      {/* Problem Details */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 dark:text-red-400">
                🚨 Проблема
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Современная молодёжь сталкивается с серьёзными вызовами при выборе карьерного пути
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-red-200 dark:border-red-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-600" />
                    Отсутствие ясности
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • Более 10,000 профессий на рынке
                  </p>
                  <p className="text-muted-foreground">
                    • Непонятно, что подходит именно вам
                  </p>
                  <p className="text-muted-foreground">
                    • Устаревшая профориентация в школах
                  </p>
                  <p className="text-muted-foreground">
                    • Страх сделать неправильный выбор
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 dark:border-orange-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                    Непонимание навыков
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • Рынок труда меняется каждый год
                  </p>
                  <p className="text-muted-foreground">
                    • Непонятно, какие навыки актуальны
                  </p>
                  <p className="text-muted-foreground">
                    • Нет чёткого плана развития
                  </p>
                  <p className="text-muted-foreground">
                    • Информация разрозненна и противоречива
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-200 dark:border-yellow-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-yellow-600" />
                    Сложности с поиском
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • Вакансии на разных площадках
                  </p>
                  <p className="text-muted-foreground">
                    • Сложно понять, подходит ли позиция
                  </p>
                  <p className="text-muted-foreground">
                    • Требования не соответствуют навыкам
                  </p>
                  <p className="text-muted-foreground">
                    • Много времени на фильтрацию
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 dark:border-red-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-red-600" />
                    Проблемы с резюме
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    • Не знают, как правильно составить
                  </p>
                  <p className="text-muted-foreground">
                    • Резюме не проходят ATS-системы
                  </p>
                  <p className="text-muted-foreground">
                    • Сложно подчеркнуть сильные стороны
                  </p>
                  <p className="text-muted-foreground">
                    • Нет понимания требований рынка
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center p-8 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p className="text-lg font-semibold text-red-600 dark:text-red-400">
                Результат: потерянное время, неправильные решения, упущенные возможности
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Details */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400">
                ✅ Решение
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                JobPath AI — комплексная AI-платформа для построения успешной карьеры
              </p>
            </div>

            <div className="space-y-8">
              {/* Feature 1 */}
              <Card className="border-2 border-blue-200 dark:border-blue-900">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-2xl font-bold">1. Анализ навыков с помощью ИИ</h3>
                      <p className="text-muted-foreground">
                        Наш ИИ проводит глубокий анализ ваших компетенций, интересов и личностных качеств:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Оценка текущих навыков</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Анализ интересов и ценностей</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Определение сильных сторон</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Выявление зон роста</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="border-2 border-purple-200 dark:border-purple-900">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-2xl font-bold">2. Профессии будущего</h3>
                      <p className="text-muted-foreground">
                        Предлагаем актуальные карьерные направления на основе анализа рынка труда:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Растущие индустрии и ниши</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Прогноз зарплат и спроса</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Соответствие вашему профилю</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Удалённая работа и гибридные форматы</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="border-2 border-green-200 dark:border-green-900">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-2xl font-bold">3. Индивидуальный Roadmap</h3>
                      <p className="text-muted-foreground">
                        Создаём персональный план развития с конкретными шагами:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Курсы и обучение по приоритетам</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Проекты для портфолио</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Этапы карьерного роста</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Временные рамки и метрики</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 4 */}
              <Card className="border-2 border-orange-200 dark:border-orange-900">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-2xl font-bold">4. Умный подбор вакансий</h3>
                      <p className="text-muted-foreground">
                        ИИ находит идеальные позиции, соответствующие вашему профилю:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Сопоставление навыков с требованиями</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Оценка совместимости в %</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Агрегация из разных источников</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Уведомления о новых вакансиях</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 5 */}
              <Card className="border-2 border-yellow-200 dark:border-yellow-900">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center">
                        <FileText className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-2xl font-bold">5. Генерация резюме</h3>
                      <p className="text-muted-foreground">
                        Создаём профессиональное резюме, оптимизированное под конкретную вакансию:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">ATS-оптимизация</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Подбор ключевых слов</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Профессиональные шаблоны</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Адаптация под индустрию</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center p-8 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                Результат: ясный план, развитие нужных навыков, работа мечты
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Готовы начать свой путь?
            </h2>
            <p className="text-lg text-blue-100">
              Присоединяйтесь к JobPath AI и постройте карьеру своей мечты
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Начать бесплатно
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
