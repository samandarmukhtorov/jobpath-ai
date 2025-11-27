import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                JobPath AI
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-платформа для подбора профессии и построения карьеры
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/problem-solution" className="text-muted-foreground hover:text-primary transition-colors">
                  Проблема → Решение
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Команда
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-muted-foreground hover:text-primary transition-colors">
                  Дорожная карта
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/implementation" className="text-muted-foreground hover:text-primary transition-colors">
                  Реализация
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Документация
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Блог
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Поддержка
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Партнерство
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  О проекте
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Карьера
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© 2024 JobPath AI. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
