'use client'

import Image from 'next/image'

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans">
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-lime-500 rounded-sm flex items-center justify-center font-bold text-slate-950">7</div>
            <span className="font-bold text-lg text-slate-50">Azino777</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-lime-500 transition-colors">О казино</a>
            <a href="#features" className="hover:text-lime-500 transition-colors">Игры</a>
            <a href="#mobile" className="hover:text-lime-500 transition-colors">Мобайл</a>
            <a href="#faq" className="hover:text-lime-500 transition-colors">FAQ</a>
          </nav>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-balance leading-tight">
              <span className="text-lime-500">Azino777</span> – официальный казино для игроков
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Добро пожаловать на официальный сайт <span className="font-semibold text-slate-50">Azino777</span>. Играй в мобайл казино с лучшими слотами, быстрыми выплатами и честными условиями.
            </p>
            <button
              onClick={() => {
                alert('Переход к регистрации')
              }}
              className="bg-lime-500 hover:bg-lime-600 text-slate-950 font-bold py-3 px-8 rounded-lg transition-colors w-full sm:w-auto"
            >
              Начать играть в казино
            </button>
          </div>
          <div className="relative w-full h-96 rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
            <Image
              src="/azino777-hero.png"
              alt="Azino777 официальный казино с лучшими игроками"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ========== SECTION: О казино ========== */}
      <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-800">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-slate-50">
          <span className="text-lime-500">Azino777</span> официальный – играй с уверенностью
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors">
            <h3 className="text-xl font-bold mb-4 text-amber-500">Казино мобайл версия</h3>
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-slate-50">Azino777</span> – это официальный казино сайт с идеальной адаптацией под мобайл. Установи приложение на свой телефон и играй в лучшие слоты в любое время суток. Казино мобайл позволяет наслаждаться игрой везде: дома, в дороге, на работе.
            </p>
          </article>
          <article className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors">
            <h3 className="text-xl font-bold mb-4 text-amber-500">Быстрые выплаты</h3>
            <p className="text-slate-300 leading-relaxed">
              Официальный сайт <span className="font-semibold text-slate-50">Azino</span> гарантирует честные и быстрые выплаты. Твой выигрыш в казино мобайл переведётся на счёт в течение нескольких минут. Никаких скрытых комиссий и подвохов – прозрачная система расчётов.
            </p>
          </article>
        </div>
      </section>

      {/* ========== SECTION: Игры казино ========== */}
      <section id="features" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-800">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-slate-50">
          Лучшие игры в <span className="text-lime-500">Azino777</span> казино мобайл
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Слоты казино', desc: 'Широкий выбор слотов с огромными коэффициентами' },
            { title: 'Рулетка', desc: 'Классическая и европейская рулетка в Azino777' },
            { title: 'Блэкджек', desc: 'Легендарный блэкджек для профессионалов' },
            { title: 'Карточные игры', desc: 'Покер, баккара и другие карточные развлечения' },
            { title: 'Живой казино', desc: 'Настоящие крупье и реальная атмосфера' },
            { title: 'Кено и лотереи', desc: 'Быстрые игры с мгновенными результатами' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-slate-700 hover:border-lime-500 transition-colors group"
            >
              <div className="w-12 h-12 bg-amber-500 rounded-lg mb-4 flex items-center justify-center text-slate-950 font-bold group-hover:bg-lime-500 transition-colors">
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-50 mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== SECTION: Мобайл казино ========== */}
      <section id="mobile" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-8 text-slate-50">
              Azino777 мобайл – казино в твоём кармане
            </h2>
            <ul className="space-y-4">
              {[
                'Официальное мобайл приложение для iOS и Android',
                'Казино 777 работает без перебоев и задержек',
                'Полная защита данных и безопасные платежи',
                'Быстрая загрузка и минимальный трафик',
                'Доступ к полному каталогу игр в казино',
                'Уведомления о бонусах и новых слотах',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-lime-500 font-bold mt-0.5">✓</span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 relative h-96 bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
            <Image
              src="/azino777-hero.png"
              alt="Мобайл версия Azino777 казино на телефоне"
              fill
              loading="lazy"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-x-4 bottom-4 bg-slate-950/90 border border-slate-700 rounded-lg p-4 text-center text-slate-100">
              <p className="font-semibold">Azino777 мобайл приложение</p>
              <p className="text-sm text-slate-400 mt-1">Игры всегда под рукой</p>
            </div>
          </div> 
        </div>
      </section>

      {/* ========== SECTION: Почему Azino777 ========== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-800">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-slate-50">
          Почему миллионы игроков выбирают <span className="text-lime-500">Azino 777</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: '99%', label: 'Честность казино' },
            { num: '24/7', label: 'Поддержка онлайн' },
            { num: '+500', label: 'Слотов в казино' },
            { num: '100x', label: 'Максимум коэффициент' },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-6 bg-slate-900 rounded-lg border border-slate-800">
              <div className="text-3xl font-bold text-lime-500 mb-2">{item.num}</div>
              <p className="text-slate-300 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== SECTION: FAQ ========== */}
      <section id="faq" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-12 text-slate-50">
          Частые вопросы об <span className="text-lime-500">Azino777</span> казино
        </h2>
        <div className="space-y-4">
          {[
            {
              q: 'Как зарегистрироваться в официальном казино Azino777?',
              a: 'Регистрация в Azino777 займёт меньше минуты. Введи электронную почту, пароль и дату рождения. Вот и готово – ты в казино мобайл и можешь начинать играть в слоты.',
            },
            {
              q: 'Какой минимальный депозит в казино Azino777?',
              a: 'Официальный сайт Azino777 принимает депозиты от 100 рублей. Сумма доступна каждому игроку. Вноси по мере необходимости и наслаждайся казино мобайл.',
            },
            {
              q: 'Как вывести выигрыш из Azino 777 казино?',
              a: 'Выплаты в Azino777 быстрые. Перейди в кабинет, выбери способ вывода и укажи сумму. За 15-30 минут деньги поступят на твой счёт. Казино работает честно.',
            },
            {
              q: 'Есть ли приложение Azino777 для мобайл?',
              a: 'Да, официальное мобайл приложение Azino777 доступно для iOS и Android. Скачай казино прямо на свой телефон и играй слоты в любой момент.',
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="bg-slate-900 p-6 rounded-lg border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors group"
            >
              <summary className="font-bold text-slate-50 flex items-start gap-3 list-none">
                <span className="text-lime-500 flex-shrink-0">Q</span>
                <span>{faq.q}</span>
              </summary>
              <p className="text-slate-300 mt-4 ml-6">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ========== SECTION: CTA ========== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-800">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-10 rounded-lg border border-slate-700 text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-50">
            Начни играть в <span className="text-lime-500">Azino777</span> прямо сейчас!
          </h2>
          <p className="text-slate-300 mb-6 text-lg">
            Официальный сайт казино Azino777 ждёт новых игроков. Казино мобайл, слоты, быстрые выплаты – всё здесь.
          </p>
          <button
            onClick={() => {
              alert('Переход к регистрации')
            }}
            className="bg-lime-500 hover:bg-lime-600 text-slate-950 font-bold py-3 px-12 rounded-lg transition-colors"
          >
            Играть в казино Azino777
          </button>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-slate-50 mb-4">Azino777</h3>
              <p className="text-slate-400 text-sm">
                Официальный казино сайт для игроков. Мобайл версия, честные слоты, быстрые выплаты.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-50 mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#about" className="hover:text-lime-500 transition-colors">О казино</a></li>
                <li><a href="#features" className="hover:text-lime-500 transition-colors">Игры</a></li>
                <li><a href="#mobile" className="hover:text-lime-500 transition-colors">Мобайл</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-50 mb-4">Контакты</h4>
              <p className="text-slate-400 text-sm">support@azino777.com</p>
              <p className="text-slate-400 text-sm">+7 (800) 000-00-00</p>
            </div>
          </div>

          {/* ========== HASHTAGS FOR SEARCH ========== */}
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500 text-xs mb-3 font-semibold">КЛЮЧЕВЫЕ ФРАЗЫ</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                '#azino777официальный',
                '#азино777',
                '#азиномобайл',
                '#казиноmobail',
                '#azino777мобайл',
                '#официальныйказино',
                '#казино777',
                '#азино777официальныйсайт',
                '#слотыонлайн',
                '#быстрыевыплаты',
                '#азиномобайлказино',
                '#лучшиеслоты',
              ].map((tag, idx) => (
                <span key={idx} className="text-slate-400 hover:text-lime-500 transition-colors cursor-pointer text-xs bg-slate-800 px-3 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 text-center text-slate-500 text-xs">
            <p>© 2024 Azino777. Все права защищены. | <a href="/robots.txt" className="hover:text-lime-500">robots.txt</a> | <a href="/sitemap.xml" className="hover:text-lime-500">sitemap.xml</a></p>
          </div>
        </div>
      </footer>
    </main>
  )
}
