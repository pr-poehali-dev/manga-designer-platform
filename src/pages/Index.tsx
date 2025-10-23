import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const mockWorks = [
  {
    id: 1,
    title: 'Shadows of Tokyo',
    author: 'Yuki Tanaka',
    rating: 4.5,
    image: 'https://cdn.poehali.dev/projects/baeddd90-8249-4b97-97eb-84349b4e5ed5/files/69006a7f-44d1-4551-b4f0-812268e7b988.jpg',
    isPaid: false,
    views: 12500,
    likes: 2340
  },
  {
    id: 2,
    title: 'Dragon Heart Chronicles',
    author: 'Hikaru Sato',
    rating: 4.8,
    image: 'https://cdn.poehali.dev/projects/baeddd90-8249-4b97-97eb-84349b4e5ed5/files/60922583-c483-46b8-9d68-98cba75a30a5.jpg',
    isPaid: true,
    price: 299,
    views: 28900,
    likes: 5670
  },
  {
    id: 3,
    title: 'Moonlight Sakura',
    author: 'Aiko Yamamoto',
    rating: 4.7,
    image: 'https://cdn.poehali.dev/projects/baeddd90-8249-4b97-97eb-84349b4e5ed5/files/c379ab96-c2e5-4c0a-870c-a17b23b8a013.jpg',
    isPaid: true,
    price: 199,
    views: 18700,
    likes: 4120
  },
  {
    id: 4,
    title: 'Steel Wings',
    author: 'Kenji Kobayashi',
    rating: 4.3,
    image: 'https://cdn.poehali.dev/projects/baeddd90-8249-4b97-97eb-84349b4e5ed5/files/69006a7f-44d1-4551-b4f0-812268e7b988.jpg',
    isPaid: false,
    views: 9800,
    likes: 1890
  },
  {
    id: 5,
    title: 'Eternal Spring',
    author: 'Mai Fujiwara',
    rating: 4.9,
    image: 'https://cdn.poehali.dev/projects/baeddd90-8249-4b97-97eb-84349b4e5ed5/files/60922583-c483-46b8-9d68-98cba75a30a5.jpg',
    isPaid: true,
    price: 399,
    views: 45600,
    likes: 8920
  },
  {
    id: 6,
    title: 'Night Wanderer',
    author: 'Ryu Nakamura',
    rating: 4.6,
    image: 'https://cdn.poehali.dev/projects/baeddd90-8249-4b97-97eb-84349b4e5ed5/files/c379ab96-c2e5-4c0a-870c-a17b23b8a013.jpg',
    isPaid: false,
    views: 15300,
    likes: 3240
  }
];

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <Icon name="PenTool" className="text-primary" size={28} />
              </div>
              <span className="text-2xl font-bold">MANGA CREATOR</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="hover:text-primary transition-colors font-medium">
                Главная
              </a>
              <a href="#catalog" className="hover:text-primary transition-colors font-medium">
                Каталог
              </a>
              <a href="#top" className="hover:text-primary transition-colors font-medium">
                Топ
              </a>
              <a href="#dashboard" className="hover:text-primary transition-colors font-medium">
                Личный кабинет
              </a>
              <a href="#editor" className="hover:text-primary transition-colors font-medium">
                Редактор
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                <Icon name={isDark ? 'Sun' : 'Moon'} size={20} />
              </Button>
              <Button variant="outline" className="hidden md:inline-flex">
                Войти
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Регистрация
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 opacity-10">
          <div className="brush-stroke absolute top-20 left-0 w-full h-32 blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/20">
                🎨 Платформа для создателей манги
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Создавай, публикуй,
              <br />
              <span className="text-primary">зарабатывай</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Профессиональная платформа для авторов комиксов и манги из России и СНГ
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Icon name="PenTool" size={20} className="mr-2" />
                Начать создавать
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Смотреть работы
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2,500+</div>
                <div className="text-sm text-muted-foreground mt-1">Авторов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15,000+</div>
                <div className="text-sm text-muted-foreground mt-1">Работ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground mt-1">Читателей</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Популярные работы</h2>
              <p className="text-muted-foreground">Лучшие работы этой недели</p>
            </div>
            <Button variant="ghost" className="gap-2">
              Смотреть все
              <Icon name="ArrowRight" size={18} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockWorks.map((work) => (
              <Card key={work.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    {work.isPaid ? (
                      <Badge className="bg-primary text-primary-foreground font-medium">
                        {work.price} ₽
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="font-medium">
                        Бесплатно
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardContent className="p-5 space-y-3">
                  <div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">от {work.author}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={i < Math.floor(work.rating) ? 'fill-primary text-primary' : 'text-muted'}
                      />
                    ))}
                    <span className="text-sm font-medium ml-1">{work.rating}</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2 border-t border-border/50">
                    <div className="flex items-center gap-1">
                      <Icon name="Eye" size={16} />
                      <span>{work.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Heart" size={16} />
                      <span>{work.likes.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Возможности платформы</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Всё необходимое для создания и монетизации вашей манги
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'PenTool',
                title: 'Редактор',
                description: 'Мощный редактор с инструментами рисования и слоями'
              },
              {
                icon: 'DollarSign',
                title: 'Монетизация',
                description: 'Продавайте работы и получайте деньги напрямую'
              },
              {
                icon: 'Shield',
                title: 'Защита',
                description: 'Водяные знаки и защита от копирования'
              },
              {
                icon: 'TrendingUp',
                title: 'Аналитика',
                description: 'Отслеживайте просмотры, лайки и доходы'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="text-center p-6 hover:shadow-lg transition-shadow border-border/50">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} className="text-primary" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы начать свою историю?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам авторов манги со всего СНГ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Зарегистрироваться бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="PenTool" className="text-primary" size={24} />
                <span className="font-bold text-lg">MANGA CREATOR</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для создателей комиксов и манги из России и СНГ
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Платформа</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Цены</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Авторам</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Редактор</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Монетизация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обучение</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Конфиденциальность</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 Manga Creator Platform. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
