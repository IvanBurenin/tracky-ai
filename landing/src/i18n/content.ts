export type Language = "ru" | "en" | "zh" | "fr" | "de" | "es";
export type ScreenId = "home" | "diary" | "ai" | "progress" | "run";

export interface ScreenCopy {
  id: ScreenId;
  name: string;
  note: string;
  alt: string;
}

export interface StepCopy {
  title: string;
  copy: string;
}

export interface ProgramRowCopy {
  day: string;
  type: string;
  exercises: string;
}

export interface GoalCopy {
  text: string;
  done: boolean;
}

export interface HeroHighlight {
  title: string;
  copy: string;
}

export interface LevelCopy {
  name: string;
  points: string;
}

export interface MeasurementCopy {
  label: string;
  value: string;
}

export interface AiPromptCopy {
  label: string;
  user: string;
  reply: string[];
}

export interface ProgressRangeCopy {
  label: string;
  months: string[];
}

export interface LandingContent {
  meta: { title: string; description: string };
  free: string;
  header: {
    descriptor: string;
    writeBot: string;
    language: string;
    menu: string;
    navLabel: string;
    nav: { how: string; screens: string; program: string; progress: string };
  };
  hero: {
    title: string;
    lede: string;
    cta: string;
    creditLabel: string;
    ai: string;
    highlights: HeroHighlight[];
  };
  steps: { title: string; lede: string; items: StepCopy[] };
  screens: {
    title: string;
    lede: string;
    foot: string;
    hint: string;
    open: string;
    close: string;
    prev: string;
    next: string;
    tabsLabel: string;
    items: ScreenCopy[];
  };
  program: {
    title: string;
    lede: string;
    headers: { day: string; type: string; exercises: string };
    rows: ProgramRowCopy[];
    caption: string;
    meta: string[];
  };
  runs: {
    title: string;
    lede: string;
    routeTitle: string;
    routeMeta: string;
    start: string;
    finish: string;
    km: string;
    time: string;
    pace: string;
    heart: string;
    kcal: string;
    goalsTitle: string;
    goalsMeta: string;
    goals: GoalCopy[];
    goalsNote: string;
    routeCaption: string;
  };
  ai: {
    title: string;
    lede: string;
    assistant: string;
    user: string;
    reply: string[];
    caption: string;
    promptsLabel: string;
    prompts: AiPromptCopy[];
  };
  progress: {
    title: string;
    lede: string;
    panel: string;
    weight: string;
    volume: string;
    months: [string, string, string];
    caption: string;
    measurementsTitle: string;
    measurementsNote: string;
    measurements: MeasurementCopy[];
    rangeLabel: string;
    ranges: ProgressRangeCopy[];
  };
  levels: {
    title: string;
    lede: string;
    rule: string;
    note: string;
    pointsLabel: string;
    items: LevelCopy[];
  };
  developer: {
    title: string;
    lede: string;
    about: string;
    stats: { value: string; label: string }[];
    projectsLabel: string;
    projects: { name: string; role: string }[];
    channel: string;
    handle: string;
  };
  cta: {
    title: string;
    copy: string;
    button: string;
    copyHandle: string;
    copied: string;
  };
  footer: { note: string };
  weekLog: {
    title: string;
    sample: string;
    days: string[];
    workoutType: string;
    minutes: string;
    exercises: string[];
    kg: string;
    done: string;
    caption: string;
    hint: string;
  };
  a11y: {
    skip: string;
    weekExample: string;
    programExample: string;
    languages: string;
    chartExample: string;
    logoBack: string;
    done: string;
    notDone: string;
    rest: string;
    today: string;
    backToTop: string;
  };
}

const ru: LandingContent = {
  meta: {
    title: "Tracky: тренировочный журнал в Telegram",
    description:
      "Дневник тренировок, программ и прогресса в Telegram: записывай подходы, пробежки и замеры без таблиц",
  },
  free: "Бот абсолютно бесплатный",
  header: {
    descriptor: "тренировочный журнал",
    writeBot: "Написать боту",
    language: "Язык",
    menu: "Меню",
    navLabel: "Разделы страницы",
    nav: {
      how: "Как это работает",
      screens: "Экраны",
      program: "Программа",
      progress: "Прогресс",
    },
  },
  hero: {
    title: "Тренировки не теряются",
    lede: "Дневник, программы и ИИ-ассистент в одном боте",
    cta: "Открыть в Telegram",
    creditLabel: "Фото:",
    ai: "ИИ-ассистент",
    highlights: [
      { title: "Силовые и программы", copy: "Подходы, веса и планы" },
      { title: "Беговой трекер", copy: "GPS, темп и маршрут" },
      { title: "Графики прогресса", copy: "Вес, замеры, объём" },
      { title: "ИИ-ассистент", copy: "Запись словами и вопросы" },
    ],
  },
  steps: {
    title: "Три шага до первой записи",
    lede: "Открой бота, запиши подход и вернись к прогрессу",
    items: [
      { title: "Открой бота", copy: "Нажми Start в Telegram" },
      {
        title: "Запиши тренировку",
        copy: "Выбери упражнения или попроси ИИ-ассистента",
      },
      {
        title: "Смотри прогресс",
        copy: "Графики, вес и история в одном месте",
      },
    ],
  },
  screens: {
    title: "Пять экранов, один журнал",
    lede: "Обзор, дневник, прогресс, ИИ и активность",
    foot: "Интерфейс на шести языках",
    hint: "Нажми на экран, чтобы увеличить",
    open: "Открыть экран",
    close: "Закрыть",
    prev: "Предыдущий экран",
    next: "Следующий экран",
    tabsLabel: "Экраны приложения",
    items: [
      { id: "home", name: "Обзор", note: "Неделя, уровень и цели", alt: "Экран «Обзор» в Tracky" },
      { id: "diary", name: "Дневник", note: "Тренировки и программы", alt: "Экран «Дневник» в Tracky" },
      { id: "ai", name: "ИИ", note: "Тренировка словами", alt: "Экран «ИИ» в Tracky" },
      { id: "progress", name: "Прогресс", note: "Вес и километраж", alt: "Экран «Прогресс» в Tracky" },
      { id: "run", name: "Активность", note: "Маршрут и темп", alt: "Экран «Активность» в Tracky" },
    ],
  },
  program: {
    title: "Планирование",
    lede: "Выбери дни, упражнения и отдых, а Tracky покажет, что делать сегодня",
    headers: { day: "День", type: "Тренировка", exercises: "Упражнения" },
    rows: [
      {
        day: "Понедельник",
        type: "Силовая",
        exercises: "Приседания, жим лёжа, тяга в наклоне",
      },
      { day: "Среда", type: "Пробежка", exercises: "5 км, спокойный темп" },
      {
        day: "Пятница",
        type: "Силовая",
        exercises: "Становая тяга, подтягивания, планка",
      },
    ],
    caption: "Пример программы",
    meta: ["3 дня в неделю", "60 минут", "отдых 2 минуты"],
  },
  runs: {
    title: "Пробежки и цели",
    lede: "Маршрут, темп и дистанция рядом с чек-листом целей",
    routeTitle: "Пробежка",
    routeMeta: "пример маршрута",
    start: "старт",
    finish: "финиш",
    km: "км",
    time: "время",
    pace: "темп",
    heart: "пульс",
    kcal: "ккал",
    goalsTitle: "Цели",
    goalsMeta: "пример списка",
    goals: [
      { text: "Пробежать 10 км", done: true },
      { text: "Приседать 100 кг", done: false },
      { text: "Тренироваться 3 раза в неделю", done: false },
    ],
    goalsNote: "Цели можно отмечать в боте и в приложении",
    routeCaption: "Пример маршрута",
  },
  ai: {
    title: "Скажи словами",
    lede: "ИИ-ассистент поймёт «Добавь завтра приседания 3×10 по 60 кг» и запишет",
    assistant: "ИИ-ассистент",
    user: "Добавь завтра тренировку: приседания 3×10 по 60 кг",
    reply: ["Записал на завтра", "Приседания, 3 подхода по 10, 60 кг"],
    caption: "Пример диалога",
    promptsLabel: "Примеры запросов",
    prompts: [
      {
        label: "Добавить тренировку",
        user: "Добавь завтра тренировку: приседания 3×10 по 60 кг",
        reply: ["Записал на завтра", "Приседания, 3 подхода по 10, 60 кг"],
      },
      {
        label: "Сколько я приседал?",
        user: "Сколько я приседал за месяц?",
        reply: ["За месяц: 12 подходов", "Лучший вес: 80 кг, средний: 65 кг"],
      },
      {
        label: "Мой прогресс",
        user: "Какой у меня прогресс по весу?",
        reply: ["Вес: минус 4 кг за два месяца", "Объём тренировок: плюс 18%"],
      },
    ],
  },
  progress: {
    title: "Прогресс видно",
    lede: "Вес, замеры и объём тренировок в одной динамике",
    panel: "Динамика",
    weight: "вес",
    volume: "объём",
    months: ["Сен", "Окт", "Ноя"],
    caption: "Пример графика",
    measurementsTitle: "Последние замеры",
    measurementsNote: "пример замеров",
    measurements: [
      { label: "вес", value: "78,2 кг" },
      { label: "талия", value: "83 см" },
      { label: "грудь", value: "101 см" },
    ],
    rangeLabel: "Период",
    ranges: [
      { label: "3 месяца", months: ["Сен", "Окт", "Ноя"] },
      { label: "6 месяцев", months: ["Июн", "Июл", "Авг", "Сен", "Окт", "Ноя"] },
    ],
  },
  levels: {
    title: "Растёшь от тренировки к тренировке",
    lede: "Восемь уровней от Новичка до Легенды: очки начисляются за тренировки и упражнения",
    rule: "10 очков за тренировку и 2 за упражнение",
    note: "Уровень растёт автоматически по накопленным очкам",
    pointsLabel: "очк",
    items: [
      { name: "Новичок", points: "0" },
      { name: "Любитель", points: "100" },
      { name: "Спортсмен", points: "300" },
      { name: "Атлет", points: "600" },
      { name: "Профи", points: "1000" },
      { name: "Мастер", points: "1500" },
      { name: "Гуру", points: "2500" },
      { name: "Легенда", points: "4000" },
    ],
  },
  developer: {
    title: "ESPADA ENTERTAINMENT",
    lede: "Разработчик Tracky и спортивных проектов ESPADA SPORTS",
    about:
      "ESPADA SPORTS рассказывает о футболе на YouTube, Tracky ведёт тренировки",
    stats: [
      { value: "4,4 тыс.", label: "Подписчики на YouTube" },
      { value: "6 млн", label: "Просмотры видео" },
    ],
    projectsLabel: "Проекты",
    projects: [
      { name: "ESPADA SPORTS", role: "Футбольный канал" },
      { name: "Tracky", role: "Тренировочный дневник" },
    ],
    channel: "YouTube",
    handle: "@espadasportsru",
  },
  cta: {
    title: "Начни с одной тренировки",
    copy: "Дневник, программы и прогресс уже внутри",
    button: "Открыть в Telegram",
    copyHandle: "Скопировать @AiTrackyBot",
    copied: "Скопировано",
  },
  footer: { note: "Скриншоты из приложения" },
  weekLog: {
    title: "Неделя",
    sample: "пример записи",
    days: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
    workoutType: "Силовая",
    minutes: "45 мин",
    exercises: ["Приседания", "Жим лёжа", "Тяга в наклоне"],
    kg: "кг",
    done: "Выполнено",
    caption: "Пример записи в Tracky",
    hint: "Нажми на упражнение",
  },
  a11y: {
    skip: "Перейти к содержанию",
    weekExample: "Пример недели тренировок",
    programExample: "Пример недельной программы",
    languages: "Поддерживаемые языки",
    chartExample: "Пример графика веса и объёма тренировок",
    logoBack: "Tracky, к началу страницы",
    done: "выполнено",
    notDone: "не выполнено",
    rest: "отдых",
    today: "сегодня",
    backToTop: "Наверх",
  },
};

const en: LandingContent = {
  meta: {
    title: "Tracky: your training log in Telegram",
    description:
      "A diary for workouts, programs and progress in Telegram: log sets, runs and measurements without spreadsheets",
  },
  free: "The bot is absolutely free",
  header: {
    descriptor: "training log",
    writeBot: "Message the bot",
    language: "Language",
    menu: "Menu",
    navLabel: "Page sections",
    nav: {
      how: "How it works",
      screens: "Screens",
      program: "Program",
      progress: "Progress",
    },
  },
  hero: {
    title: "Your training never gets lost",
    lede: "Diary, programs and an AI assistant in one bot",
    cta: "Open in Telegram",
    creditLabel: "Photo:",
    ai: "AI assistant",
    highlights: [
      { title: "Strength and programs", copy: "Sets, weights and plans" },
      { title: "Run tracker", copy: "GPS, pace and route" },
      { title: "Progress charts", copy: "Weight, measures, volume" },
      { title: "AI assistant", copy: "Log or ask" },
    ],
  },
  steps: {
    title: "Three steps to your first entry",
    lede: "Open the bot, log a set and return to progress",
    items: [
      { title: "Open the bot", copy: "Press Start in Telegram" },
      {
        title: "Log a workout",
        copy: "Pick exercises or ask the AI assistant",
      },
      {
        title: "See progress",
        copy: "Charts, weight and history in one place",
      },
    ],
  },
  screens: {
    title: "Five screens, one log",
    lede: "Overview, diary, progress, AI and activity",
    foot: "Interface in six languages",
    hint: "Tap a screen to enlarge it",
    open: "Open screen",
    close: "Close",
    prev: "Previous screen",
    next: "Next screen",
    tabsLabel: "App screens",
    items: [
      { id: "home", name: "Overview", note: "Week, level and goals", alt: "Tracky Overview screen" },
      { id: "diary", name: "Diary", note: "Workouts and programs", alt: "Tracky Diary screen" },
      { id: "ai", name: "AI", note: "Training by words", alt: "Tracky AI screen" },
      { id: "progress", name: "Progress", note: "Weight and distance", alt: "Tracky Progress screen" },
      { id: "run", name: "Activity", note: "Route and pace", alt: "Tracky Activity screen" },
    ],
  },
  program: {
    title: "Planning",
    lede: "Choose days, exercises and rest, and Tracky shows what to do today",
    headers: { day: "Day", type: "Workout", exercises: "Exercises" },
    rows: [
      {
        day: "Monday",
        type: "Strength",
        exercises: "Squats, bench press, bent-over row",
      },
      { day: "Wednesday", type: "Run", exercises: "5 km, easy pace" },
      {
        day: "Friday",
        type: "Strength",
        exercises: "Deadlift, pull-ups, plank",
      },
    ],
    caption: "Example program",
    meta: ["3 days a week", "60 minutes", "2 minutes rest"],
  },
  runs: {
    title: "Runs and goals",
    lede: "Route, pace and distance next to the goal checklist",
    routeTitle: "Run",
    routeMeta: "sample route",
    start: "start",
    finish: "finish",
    km: "km",
    time: "time",
    pace: "pace",
    heart: "heart rate",
    kcal: "kcal",
    goalsTitle: "Goals",
    goalsMeta: "sample list",
    goals: [
      { text: "Run 10 km", done: true },
      { text: "Squat 100 kg", done: false },
      { text: "Train 3 times a week", done: false },
    ],
    goalsNote: "You can tick goals in the bot and the app",
    routeCaption: "Sample route",
  },
  ai: {
    title: "Say it in words",
    lede: "The AI assistant understands “Add squats tomorrow, 3×10 at 60 kg” and logs it",
    assistant: "AI assistant",
    user: "Add a workout tomorrow: squats 3×10 at 60 kg",
    reply: ["Logged for tomorrow", "Squats, 3 sets of 10, 60 kg"],
    caption: "Example dialogue",
    promptsLabel: "Example prompts",
    prompts: [
      {
        label: "Add a workout",
        user: "Add a workout tomorrow: squats 3×10 at 60 kg",
        reply: ["Logged for tomorrow", "Squats, 3 sets of 10, 60 kg"],
      },
      {
        label: "How much did I squat?",
        user: "How much did I squat this month?",
        reply: ["This month: 12 sets", "Best: 80 kg, average: 65 kg"],
      },
      {
        label: "My progress",
        user: "How is my weight progress?",
        reply: ["Weight: down 4 kg in two months", "Training volume: up 18%"],
      },
    ],
  },
  progress: {
    title: "Progress you can see",
    lede: "Weight, measurements and training volume in one view",
    panel: "Dynamics",
    weight: "weight",
    volume: "volume",
    months: ["Sep", "Oct", "Nov"],
    caption: "Sample chart",
    measurementsTitle: "Latest measurements",
    measurementsNote: "sample measurements",
    measurements: [
      { label: "weight", value: "78.2 kg" },
      { label: "waist", value: "83 cm" },
      { label: "chest", value: "101 cm" },
    ],
    rangeLabel: "Range",
    ranges: [
      { label: "3 months", months: ["Sep", "Oct", "Nov"] },
      { label: "6 months", months: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"] },
    ],
  },
  levels: {
    title: "Grow from one workout to the next",
    lede: "Eight levels from Beginner to Legend: points come from workouts and exercises",
    rule: "10 points per workout and 2 per exercise",
    note: "Your level rises automatically with the points you collect",
    pointsLabel: "pts",
    items: [
      { name: "Beginner", points: "0" },
      { name: "Amateur", points: "100" },
      { name: "Intermediate", points: "300" },
      { name: "Advanced", points: "600" },
      { name: "Pro", points: "1000" },
      { name: "Master", points: "1500" },
      { name: "Guru", points: "2500" },
      { name: "Legend", points: "4000" },
    ],
  },
  developer: {
    title: "ESPADA ENTERTAINMENT",
    lede: "The team behind Tracky and the Espada Sports projects",
    about:
      "ESPADA SPORTS covers football on YouTube, Tracky keeps the training",
    stats: [
      { value: "4.4K", label: "YouTube subscribers" },
      { value: "6M", label: "Video views" },
    ],
    projectsLabel: "Projects",
    projects: [
      { name: "ESPADA SPORTS", role: "Football channel" },
      { name: "Tracky", role: "Training log" },
    ],
    channel: "YouTube",
    handle: "@espadasportsru",
  },
  cta: {
    title: "Start with one workout",
    copy: "Diary, programs and progress are already inside",
    button: "Open in Telegram",
    copyHandle: "Copy @AiTrackyBot",
    copied: "Copied",
  },
  footer: { note: "Screenshots from the app" },
  weekLog: {
    title: "Week",
    sample: "sample entry",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    workoutType: "Strength",
    minutes: "45 min",
    exercises: ["Squats", "Bench press", "Bent-over row"],
    kg: "kg",
    done: "Done",
    caption: "Sample entry in Tracky",
    hint: "Tap an exercise",
  },
  a11y: {
    skip: "Skip to content",
    weekExample: "Sample training week",
    programExample: "Sample weekly program",
    languages: "Supported languages",
    chartExample: "Sample weight and training volume chart",
    logoBack: "Tracky, back to top",
    done: "done",
    notDone: "not done",
    rest: "rest",
    today: "today",
    backToTop: "Back to top",
  },
};

const de: LandingContent = {
  meta: {
    title: "Tracky: dein Trainingslog in Telegram",
    description:
      "Tagebuch für Training, Programme und Fortschritt in Telegram: Sätze, Läufe und Maße ohne Tabellen erfassen",
  },
  free: "Der Bot ist völlig kostenlos",
  header: {
    descriptor: "Trainingslog",
    writeBot: "Bot schreiben",
    language: "Sprache",
    menu: "Menü",
    navLabel: "Seitenbereiche",
    nav: {
      how: "So funktioniert es",
      screens: "Screens",
      program: "Programm",
      progress: "Fortschritt",
    },
  },
  hero: {
    title: "Training geht nicht verloren",
    lede: "Tagebuch, Programme und ein KI-Assistent in einem Bot",
    cta: "In Telegram öffnen",
    creditLabel: "Foto:",
    ai: "KI-Assistent",
    highlights: [
      { title: "Kraft und Programme", copy: "Sätze, Gewichte und Pläne" },
      { title: "Lauftracker", copy: "GPS, Tempo und Route" },
      { title: "Fortschrittsdiagramme", copy: "Gewicht, Maße, Volumen" },
      { title: "KI-Assistent", copy: "In Worten loggen und fragen" },
    ],
  },
  steps: {
    title: "Drei Schritte bis zum ersten Eintrag",
    lede: "Bot öffnen, Satz eintragen und zum Fortschritt zurückkehren",
    items: [
      { title: "Bot öffnen", copy: "Start in Telegram drücken" },
      {
        title: "Training eintragen",
        copy: "Übungen auswählen oder den KI-Assistenten fragen",
      },
      {
        title: "Fortschritt sehen",
        copy: "Diagramme, Gewicht und Verlauf an einem Ort",
      },
    ],
  },
  screens: {
    title: "Fünf Screens, ein Log",
    lede: "Überblick, Tagebuch, Fortschritt, KI und Aktivität",
    foot: "Oberfläche in sechs Sprachen",
    hint: "Screen antippen zum Vergrößern",
    open: "Screen öffnen",
    close: "Schließen",
    prev: "Vorheriger Screen",
    next: "Nächster Screen",
    tabsLabel: "App-Screens",
    items: [
      { id: "home", name: "Überblick", note: "Woche, Level und Ziele", alt: "Tracky Überblick-Screen" },
      { id: "diary", name: "Tagebuch", note: "Trainings und Programme", alt: "Tracky Tagebuch-Screen" },
      { id: "ai", name: "KI", note: "Training mit Worten", alt: "Tracky KI-Screen" },
      { id: "progress", name: "Fortschritt", note: "Gewicht und Strecke", alt: "Tracky Fortschritt-Screen" },
      { id: "run", name: "Aktivität", note: "Route und Tempo", alt: "Tracky Aktivität-Screen" },
    ],
  },
  program: {
    title: "Planung",
    lede: "Wähle Tage, Übungen und Pausen, und Tracky zeigt, was heute dran ist",
    headers: { day: "Tag", type: "Training", exercises: "Übungen" },
    rows: [
      {
        day: "Montag",
        type: "Kraft",
        exercises: "Kniebeugen, Bankdrücken, vorgebeugtes Rudern",
      },
      { day: "Mittwoch", type: "Lauf", exercises: "5 km, ruhiges Tempo" },
      {
        day: "Freitag",
        type: "Kraft",
        exercises: "Kreuzheben, Klimmzüge, Plank",
      },
    ],
    caption: "Beispielprogramm",
    meta: ["3 Tage pro Woche", "60 Minuten", "2 Minuten Pause"],
  },
  runs: {
    title: "Läufe und Ziele",
    lede: "Route, Tempo und Distanz neben der Ziel-Checkliste",
    routeTitle: "Lauf",
    routeMeta: "Beispielroute",
    start: "Start",
    finish: "Ziel",
    km: "km",
    time: "Zeit",
    pace: "Tempo",
    heart: "Puls",
    kcal: "kcal",
    goalsTitle: "Ziele",
    goalsMeta: "Beispielliste",
    goals: [
      { text: "10 km laufen", done: true },
      { text: "100 kg Kniebeuge", done: false },
      { text: "3× pro Woche trainieren", done: false },
    ],
    goalsNote: "Ziele lassen sich im Bot und in der App abhaken",
    routeCaption: "Beispielroute",
  },
  ai: {
    title: "Sag es einfach",
    lede: "Der KI-Assistent versteht „Morgen Kniebeugen, 3×10 mit 60 kg“ und trägt es ein",
    assistant: "KI-Assistent",
    user: "Morgen Training hinzufügen: Kniebeugen 3×10 mit 60 kg",
    reply: ["Für morgen eingetragen", "Kniebeugen, 3 Sätze à 10, 60 kg"],
    caption: "Beispieldialog",
    promptsLabel: "Beispielanfragen",
    prompts: [
      {
        label: "Training eintragen",
        user: "Füge morgen ein Training hinzu: Kniebeugen 3×10 mit 60 kg",
        reply: ["Für morgen eingetragen", "Kniebeugen, 3 Sätze à 10, 60 kg"],
      },
      {
        label: "Wie viel habe ich gebeugt?",
        user: "Wie viele Kniebeugen habe ich diesen Monat gemacht?",
        reply: ["Diesen Monat: 12 Sätze", "Bestwert: 80 kg, Durchschnitt: 65 kg"],
      },
      {
        label: "Mein Fortschritt",
        user: "Wie ist mein Gewichtsfortschritt?",
        reply: ["Gewicht: 4 kg weniger in zwei Monaten", "Trainingsvolumen: 18% mehr"],
      },
    ],
  },
  progress: {
    title: "Fortschritt sichtbar",
    lede: "Gewicht, Maße und Trainingsvolumen in einer Ansicht",
    panel: "Dynamik",
    weight: "Gewicht",
    volume: "Volumen",
    months: ["Sep", "Okt", "Nov"],
    caption: "Beispieldiagramm",
    measurementsTitle: "Letzte Messungen",
    measurementsNote: "Beispielmessungen",
    measurements: [
      { label: "Gewicht", value: "78,2 kg" },
      { label: "Taille", value: "83 cm" },
      { label: "Brust", value: "101 cm" },
    ],
    rangeLabel: "Zeitraum",
    ranges: [
      { label: "3 Monate", months: ["Sep", "Okt", "Nov"] },
      { label: "6 Monate", months: ["Jun", "Jul", "Aug", "Sep", "Okt", "Nov"] },
    ],
  },
  levels: {
    title: "Wachse mit jedem Training",
    lede: "Acht Stufen vom Anfänger bis zur Legende: Punkte kommen aus Trainings und Übungen",
    rule: "10 Punkte pro Training und 2 pro Übung",
    note: "Dein Level steigt automatisch mit den gesammelten Punkten",
    pointsLabel: "Pkt",
    items: [
      { name: "Anfänger", points: "0" },
      { name: "Amateur", points: "100" },
      { name: "Fortgeschritten", points: "300" },
      { name: "Athlet", points: "600" },
      { name: "Profi", points: "1000" },
      { name: "Meister", points: "1500" },
      { name: "Guru", points: "2500" },
      { name: "Legende", points: "4000" },
    ],
  },
  developer: {
    title: "ESPADA ENTERTAINMENT",
    lede: "Das Team hinter Tracky und den Espada-Sports-Projekten",
    about:
      "ESPADA SPORTS zeigt Fußball auf YouTube, Tracky führt das Training",
    stats: [
      { value: "4,4 Tsd.", label: "YouTube-Abonnenten" },
      { value: "6 Mio.", label: "Videoaufrufe" },
    ],
    projectsLabel: "Projekte",
    projects: [
      { name: "ESPADA SPORTS", role: "Fußballkanal" },
      { name: "Tracky", role: "Trainingslog" },
    ],
    channel: "YouTube",
    handle: "@espadasportsru",
  },
  cta: {
    title: "Fang mit einem Training an",
    copy: "Tagebuch, Programme und Fortschritt sind schon drin",
    button: "In Telegram öffnen",
    copyHandle: "@AiTrackyBot kopieren",
    copied: "Kopiert",
  },
  footer: { note: "Screenshots aus der App" },
  weekLog: {
    title: "Woche",
    sample: "Beispieleintrag",
    days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
    workoutType: "Kraft",
    minutes: "45 Min",
    exercises: ["Kniebeugen", "Bankdrücken", "Vorgebeugtes Rudern"],
    kg: "kg",
    done: "Erledigt",
    caption: "Beispieleintrag in Tracky",
    hint: "Übung antippen",
  },
  a11y: {
    skip: "Zum Inhalt springen",
    weekExample: "Beispieltrainingswoche",
    programExample: "Beispielwochenplan",
    languages: "Unterstützte Sprachen",
    chartExample: "Beispieldiagramm für Gewicht und Trainingsvolumen",
    logoBack: "Tracky, nach oben",
    done: "erledigt",
    notDone: "nicht erledigt",
    rest: "Ruhe",
    today: "heute",
    backToTop: "Nach oben",
  },
};

const fr: LandingContent = {
  meta: {
    title: "Tracky : votre journal d'entraînement dans Telegram",
    description:
      "Journal des entraînements, programmes et progrès dans Telegram : notez séries, courses et mesures sans tableur",
  },
  free: "Le bot est entièrement gratuit",
  header: {
    descriptor: "journal d'entraînement",
    writeBot: "Écrire au bot",
    language: "Langue",
    menu: "Menu",
    navLabel: "Sections de la page",
    nav: {
      how: "Comment ça marche",
      screens: "Écrans",
      program: "Programme",
      progress: "Progression",
    },
  },
  hero: {
    title: "Vos entraînements ne se perdent pas",
    lede: "Journal, programmes et assistant IA dans un bot Telegram",
    cta: "Ouvrir dans Telegram",
    creditLabel: "Photo :",
    ai: "Assistant IA",
    highlights: [
      { title: "Force et programmes", copy: "Séries, poids et plans" },
      { title: "Suivi de course", copy: "GPS, allure et parcours" },
      { title: "Graphiques de progression", copy: "Poids, mesures, volume" },
      { title: "Assistant IA", copy: "Notez en mots et demandez" },
    ],
  },
  steps: {
    title: "Trois étapes jusqu'à la première séance",
    lede: "Ouvre le bot, note une série et reviens à la progression",
    items: [
      { title: "Ouvre le bot", copy: "Appuie sur Start dans Telegram" },
      {
        title: "Note un entraînement",
        copy: "Choisis des exercices ou demande à l'assistant IA",
      },
      {
        title: "Regarde ta progression",
        copy: "Graphiques, poids et historique au même endroit",
      },
    ],
  },
  screens: {
    title: "Cinq écrans, un journal",
    lede: "Aperçu, journal, progression, IA et activité",
    foot: "Interface en six langues",
    hint: "Touche un écran pour l'agrandir",
    open: "Ouvrir l'écran",
    close: "Fermer",
    prev: "Écran précédent",
    next: "Écran suivant",
    tabsLabel: "Écrans de l'app",
    items: [
      { id: "home", name: "Aperçu", note: "Semaine, niveau et objectifs", alt: "Écran Aperçu de Tracky" },
      { id: "diary", name: "Journal", note: "Entraînements et programmes", alt: "Écran Journal de Tracky" },
      { id: "ai", name: "IA", note: "L'entraînement en mots", alt: "Écran IA de Tracky" },
      { id: "progress", name: "Progression", note: "Poids et distance", alt: "Écran Progression de Tracky" },
      { id: "run", name: "Activité", note: "Parcours et allure", alt: "Écran Activité de Tracky" },
    ],
  },
  program: {
    title: "Planification",
    lede: "Choisis les jours, les exercices et le repos, et Tracky montre quoi faire aujourd'hui",
    headers: { day: "Jour", type: "Entraînement", exercises: "Exercices" },
    rows: [
      {
        day: "Lundi",
        type: "Force",
        exercises: "Squats, développé couché, tirage penché",
      },
      { day: "Mercredi", type: "Course", exercises: "5 km, allure calme" },
      {
        day: "Vendredi",
        type: "Force",
        exercises: "Soulevé de terre, tractions, gainage",
      },
    ],
    caption: "Exemple de programme",
    meta: ["3 jours par semaine", "60 minutes", "2 minutes de repos"],
  },
  runs: {
    title: "Courses et objectifs",
    lede: "Parcours, allure et distance à côté de la liste d'objectifs",
    routeTitle: "Course",
    routeMeta: "parcours d'exemple",
    start: "départ",
    finish: "arrivée",
    km: "km",
    time: "temps",
    pace: "allure",
    heart: "pouls",
    kcal: "kcal",
    goalsTitle: "Objectifs",
    goalsMeta: "liste d'exemple",
    goals: [
      { text: "Courir 10 km", done: true },
      { text: "Squat 100 kg", done: false },
      { text: "S'entraîner 3 fois par semaine", done: false },
    ],
    goalsNote: "Les objectifs se cochent dans le bot et l'app",
    routeCaption: "Parcours d'exemple",
  },
  ai: {
    title: "Dis-le avec des mots",
    lede: "L'assistant IA comprend «Ajoute des squats demain, 3×10 à 60 kg» et l'enregistre",
    assistant: "Assistant IA",
    user: "Ajoute un entraînement demain : squats 3×10 à 60 kg",
    reply: ["Enregistré pour demain", "Squats, 3 séries de 10, 60 kg"],
    caption: "Exemple de dialogue",
    promptsLabel: "Exemples de requêtes",
    prompts: [
      {
        label: "Ajouter une séance",
        user: "Ajoute un entraînement demain : squats 3×10 à 60 kg",
        reply: ["Enregistré pour demain", "Squats, 3 séries de 10, 60 kg"],
      },
      {
        label: "Combien de squats ?",
        user: "Combien de squats ce mois-ci ?",
        reply: ["Ce mois-ci : 12 séries", "Record : 80 kg, moyenne : 65 kg"],
      },
      {
        label: "Ma progression",
        user: "Où en est mon poids ?",
        reply: ["Poids : 4 kg de moins en deux mois", "Volume d'entraînement : +18 %"],
      },
    ],
  },
  progress: {
    title: "Une progression visible",
    lede: "Poids, mesures et volume d'entraînement dans une seule vue",
    panel: "Dynamique",
    weight: "poids",
    volume: "volume",
    months: ["Sep", "Oct", "Nov"],
    caption: "Exemple de graphique",
    measurementsTitle: "Dernières mesures",
    measurementsNote: "exemples de mesures",
    measurements: [
      { label: "poids", value: "78,2 kg" },
      { label: "taille", value: "83 cm" },
      { label: "poitrine", value: "101 cm" },
    ],
    rangeLabel: "Période",
    ranges: [
      { label: "3 mois", months: ["Sep", "Oct", "Nov"] },
      { label: "6 mois", months: ["Juin", "Juil", "Août", "Sep", "Oct", "Nov"] },
    ],
  },
  levels: {
    title: "Progresse d'un entraînement à l'autre",
    lede: "Huit niveaux du Débutant à la Légende : les points viennent des entraînements et des exercices",
    rule: "10 points par entraînement et 2 par exercice",
    note: "Ton niveau monte automatiquement avec les points accumulés",
    pointsLabel: "pts",
    items: [
      { name: "Débutant", points: "0" },
      { name: "Amateur", points: "100" },
      { name: "Intermédiaire", points: "300" },
      { name: "Avancé", points: "600" },
      { name: "Pro", points: "1000" },
      { name: "Maître", points: "1500" },
      { name: "Gourou", points: "2500" },
      { name: "Légende", points: "4000" },
    ],
  },
  developer: {
    title: "ESPADA ENTERTAINMENT",
    lede: "L'équipe derrière Tracky et les projets Espada Sports",
    about:
      "ESPADA SPORTS raconte le football sur YouTube, Tracky suit l'entraînement",
    stats: [
      { value: "4,4 k", label: "Abonnés YouTube" },
      { value: "6 M", label: "Vues vidéo" },
    ],
    projectsLabel: "Projets",
    projects: [
      { name: "ESPADA SPORTS", role: "Chaîne football" },
      { name: "Tracky", role: "Journal d'entraînement" },
    ],
    channel: "YouTube",
    handle: "@espadasportsru",
  },
  cta: {
    title: "Commence par un entraînement",
    copy: "Journal, programmes et progression sont déjà dedans",
    button: "Ouvrir dans Telegram",
    copyHandle: "Copier @AiTrackyBot",
    copied: "Copié",
  },
  footer: { note: "Captures de l'application" },
  weekLog: {
    title: "Semaine",
    sample: "exemple d'entrée",
    days: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    workoutType: "Force",
    minutes: "45 min",
    exercises: ["Squats", "Développé couché", "Tirage penché"],
    kg: "kg",
    done: "Terminé",
    caption: "Exemple d'entrée dans Tracky",
    hint: "Touche un exercice",
  },
  a11y: {
    skip: "Aller au contenu",
    weekExample: "Exemple de semaine d'entraînement",
    programExample: "Exemple de programme hebdomadaire",
    languages: "Langues prises en charge",
    chartExample: "Exemple de graphique du poids et du volume d'entraînement",
    logoBack: "Tracky, revenir en haut",
    done: "terminé",
    notDone: "non terminé",
    rest: "repos",
    today: "aujourd'hui",
    backToTop: "Haut de page",
  },
};

const es: LandingContent = {
  meta: {
    title: "Tracky: tu diario de entrenamiento en Telegram",
    description:
      "Diario de entrenamientos, programas y progreso en Telegram: registra series, carreras y medidas sin hojas de cálculo",
  },
  free: "El bot es completamente gratis",
  header: {
    descriptor: "diario de entrenamiento",
    writeBot: "Escribir al bot",
    language: "Idioma",
    menu: "Menú",
    navLabel: "Secciones de la página",
    nav: {
      how: "Cómo funciona",
      screens: "Pantallas",
      program: "Programa",
      progress: "Progreso",
    },
  },
  hero: {
    title: "Tus entrenamientos no se pierden",
    lede: "Diario, programas y asistente de IA en un bot de Telegram",
    cta: "Abrir en Telegram",
    creditLabel: "Foto:",
    ai: "Asistente de IA",
    highlights: [
      { title: "Fuerza y programas", copy: "Series, pesos y planes" },
      { title: "Rastreador de carrera", copy: "GPS, ritmo y ruta" },
      { title: "Gráficas de progreso", copy: "Peso, medidas, volumen" },
      { title: "Asistente de IA", copy: "Registra con palabras y pregunta" },
    ],
  },
  steps: {
    title: "Tres pasos hasta el primer registro",
    lede: "Abre el bot, registra una serie y vuelve al progreso",
    items: [
      { title: "Abre el bot", copy: "Pulsa Start en Telegram" },
      {
        title: "Registra un entrenamiento",
        copy: "Elige ejercicios o pide al asistente de IA",
      },
      {
        title: "Mira el progreso",
        copy: "Gráficas, peso e historial en un solo lugar",
      },
    ],
  },
  screens: {
    title: "Cinco pantallas, un diario",
    lede: "Resumen, diario, progreso, IA y actividad",
    foot: "Interfaz en seis idiomas",
    hint: "Toca una pantalla para ampliarla",
    open: "Abrir pantalla",
    close: "Cerrar",
    prev: "Pantalla anterior",
    next: "Pantalla siguiente",
    tabsLabel: "Pantallas de la app",
    items: [
      { id: "home", name: "Resumen", note: "Semana, nivel y metas", alt: "Pantalla Resumen de Tracky" },
      { id: "diary", name: "Diario", note: "Entrenamientos y programas", alt: "Pantalla Diario de Tracky" },
      { id: "ai", name: "IA", note: "Entrenamiento con palabras", alt: "Pantalla IA de Tracky" },
      { id: "progress", name: "Progreso", note: "Peso y distancia", alt: "Pantalla Progreso de Tracky" },
      { id: "run", name: "Actividad", note: "Ruta y ritmo", alt: "Pantalla Actividad de Tracky" },
    ],
  },
  program: {
    title: "Planificación",
    lede: "Elige días, ejercicios y descanso, y Tracky muestra qué hacer hoy",
    headers: { day: "Día", type: "Entrenamiento", exercises: "Ejercicios" },
    rows: [
      {
        day: "Lunes",
        type: "Fuerza",
        exercises: "Sentadillas, press de banca, remo inclinado",
      },
      { day: "Miércoles", type: "Carrera", exercises: "5 km, ritmo suave" },
      {
        day: "Viernes",
        type: "Fuerza",
        exercises: "Peso muerto, dominadas, plancha",
      },
    ],
    caption: "Programa de ejemplo",
    meta: ["3 días por semana", "60 minutos", "2 minutos de descanso"],
  },
  runs: {
    title: "Carreras y metas",
    lede: "Ruta, ritmo y distancia junto a la lista de metas",
    routeTitle: "Carrera",
    routeMeta: "ruta de ejemplo",
    start: "inicio",
    finish: "meta",
    km: "km",
    time: "tiempo",
    pace: "ritmo",
    heart: "pulso",
    kcal: "kcal",
    goalsTitle: "Metas",
    goalsMeta: "lista de ejemplo",
    goals: [
      { text: "Correr 10 km", done: true },
      { text: "Sentadilla 100 kg", done: false },
      { text: "Entrenar 3 veces por semana", done: false },
    ],
    goalsNote: "Las metas se marcan en el bot y en la app",
    routeCaption: "Ruta de ejemplo",
  },
  ai: {
    title: "Dilo con palabras",
    lede: "El asistente de IA entiende «Añade sentadillas mañana, 3×10 con 60 kg» y lo registra",
    assistant: "Asistente de IA",
    user: "Añade un entrenamiento mañana: sentadillas 3×10 con 60 kg",
    reply: ["Registrado para mañana", "Sentadillas, 3 series de 10, 60 kg"],
    caption: "Diálogo de ejemplo",
    promptsLabel: "Ejemplos de consultas",
    prompts: [
      {
        label: "Añadir entrenamiento",
        user: "Añade un entrenamiento mañana: sentadillas 3×10 con 60 kg",
        reply: ["Registrado para mañana", "Sentadillas, 3 series de 10, 60 kg"],
      },
      {
        label: "¿Cuántas sentadillas?",
        user: "¿Cuántas sentadillas hice este mes?",
        reply: ["Este mes: 12 series", "Mejor: 80 kg, media: 65 kg"],
      },
      {
        label: "Mi progreso",
        user: "¿Cómo va mi peso?",
        reply: ["Peso: 4 kg menos en dos meses", "Volumen de entrenamiento: +18 %"],
      },
    ],
  },
  progress: {
    title: "Progreso visible",
    lede: "Peso, medidas y volumen de entrenamiento en una sola vista",
    panel: "Dinámica",
    weight: "peso",
    volume: "volumen",
    months: ["Sep", "Oct", "Nov"],
    caption: "Gráfica de ejemplo",
    measurementsTitle: "Últimas medidas",
    measurementsNote: "medidas de ejemplo",
    measurements: [
      { label: "peso", value: "78,2 kg" },
      { label: "cintura", value: "83 cm" },
      { label: "pecho", value: "101 cm" },
    ],
    rangeLabel: "Periodo",
    ranges: [
      { label: "3 meses", months: ["Sep", "Oct", "Nov"] },
      { label: "6 meses", months: ["Jun", "Jul", "Ago", "Sep", "Oct", "Nov"] },
    ],
  },
  levels: {
    title: "Crece de entrenamiento en entrenamiento",
    lede: "Ocho niveles de Principiante a Leyenda: los puntos vienen de entrenamientos y ejercicios",
    rule: "10 puntos por entrenamiento y 2 por ejercicio",
    note: "Tu nivel sube automáticamente con los puntos acumulados",
    pointsLabel: "pts",
    items: [
      { name: "Principiante", points: "0" },
      { name: "Aficionado", points: "100" },
      { name: "Intermedio", points: "300" },
      { name: "Avanzado", points: "600" },
      { name: "Pro", points: "1000" },
      { name: "Máster", points: "1500" },
      { name: "Gurú", points: "2500" },
      { name: "Leyenda", points: "4000" },
    ],
  },
  developer: {
    title: "ESPADA ENTERTAINMENT",
    lede: "El equipo detrás de Tracky y los proyectos Espada Sports",
    about:
      "ESPADA SPORTS cuenta el fútbol en YouTube, Tracky registra el entrenamiento",
    stats: [
      { value: "4,4 mil", label: "Suscriptores de YouTube" },
      { value: "6 M", label: "Visualizaciones" },
    ],
    projectsLabel: "Proyectos",
    projects: [
      { name: "ESPADA SPORTS", role: "Canal de fútbol" },
      { name: "Tracky", role: "Diario de entrenamiento" },
    ],
    channel: "YouTube",
    handle: "@espadasportsru",
  },
  cta: {
    title: "Empieza con un entrenamiento",
    copy: "El diario, los programas y el progreso ya están dentro",
    button: "Abrir en Telegram",
    copyHandle: "Copiar @AiTrackyBot",
    copied: "Copiado",
  },
  footer: { note: "Capturas de la app" },
  weekLog: {
    title: "Semana",
    sample: "registro de ejemplo",
    days: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    workoutType: "Fuerza",
    minutes: "45 min",
    exercises: ["Sentadillas", "Press de banca", "Remo inclinado"],
    kg: "kg",
    done: "Hecho",
    caption: "Registro de ejemplo en Tracky",
    hint: "Toca un ejercicio",
  },
  a11y: {
    skip: "Ir al contenido",
    weekExample: "Semana de entrenamiento de ejemplo",
    programExample: "Programa semanal de ejemplo",
    languages: "Idiomas disponibles",
    chartExample: "Gráfica de ejemplo de peso y volumen de entrenamiento",
    logoBack: "Tracky, volver arriba",
    done: "hecho",
    notDone: "no hecho",
    rest: "descanso",
    today: "hoy",
    backToTop: "Volver arriba",
  },
};

const zh: LandingContent = {
  meta: {
    title: "Tracky：你的 Telegram 训练日志",
    description:
      "在 Telegram 里记录训练、计划和进度：无需表格，记录每组动作、跑步和身体数据",
  },
  free: "机器人完全免费",
  header: {
    descriptor: "训练日志",
    writeBot: "给机器人发消息",
    language: "语言",
    menu: "菜单",
    navLabel: "页面分区",
    nav: {
      how: "使用方式",
      screens: "界面",
      program: "计划",
      progress: "进度",
    },
  },
  hero: {
    title: "训练不会丢失",
    lede: "日记、计划与 AI 助手，都在一个 Telegram 机器人里",
    cta: "在 Telegram 中打开",
    creditLabel: "照片：",
    ai: "AI 助手",
    highlights: [
      { title: "力量与计划", copy: "组数、重量和方案" },
      { title: "跑步追踪", copy: "GPS、配速和路线" },
      { title: "进度图表", copy: "体重、围度和训练量" },
      { title: "AI 助手", copy: "用一句话记录与提问" },
    ],
  },
  steps: {
    title: "三步开始第一次记录",
    lede: "打开机器人，记录一组，再回来看进度",
    items: [
      { title: "打开机器人", copy: "在 Telegram 中按 Start" },
      {
        title: "记录训练",
        copy: "选择动作，或直接问 AI 助手",
      },
      {
        title: "查看进度",
        copy: "图表、体重和历史都在一个地方",
      },
    ],
  },
  screens: {
    title: "五个界面，一本日志",
    lede: "概览、日记、进度、AI 和活动",
    foot: "界面支持六种语言",
    hint: "点按界面可放大",
    open: "打开界面",
    close: "关闭",
    prev: "上一个界面",
    next: "下一个界面",
    tabsLabel: "应用界面",
    items: [
      { id: "home", name: "概览", note: "本周、等级和目标", alt: "Tracky 概览界面" },
      { id: "diary", name: "日记", note: "训练和计划", alt: "Tracky 日记界面" },
      { id: "ai", name: "AI", note: "用一句话记录训练", alt: "Tracky AI 界面" },
      { id: "progress", name: "进度", note: "体重和跑量", alt: "Tracky 进度界面" },
      { id: "run", name: "活动", note: "路线和配速", alt: "Tracky 活动界面" },
    ],
  },
  program: {
    title: "计划",
    lede: "选择日期、动作和休息，Tracky 告诉你今天练什么",
    headers: { day: "日期", type: "训练", exercises: "动作" },
    rows: [
      {
        day: "周一",
        type: "力量",
        exercises: "深蹲、卧推、俯身划船",
      },
      { day: "周三", type: "跑步", exercises: "5 公里，轻松配速" },
      {
        day: "周五",
        type: "力量",
        exercises: "硬拉、引体向上、平板支撑",
      },
    ],
    caption: "计划示例",
    meta: ["每周 3 天", "60 分钟", "组间休息 2 分钟"],
  },
  runs: {
    title: "跑步和目标",
    lede: "路线、配速和距离，紧挨着目标清单",
    routeTitle: "跑步",
    routeMeta: "路线示例",
    start: "起点",
    finish: "终点",
    km: "公里",
    time: "时间",
    pace: "配速",
    heart: "心率",
    kcal: "千卡",
    goalsTitle: "目标",
    goalsMeta: "列表示例",
    goals: [
      { text: "跑 10 公里", done: true },
      { text: "深蹲 100 公斤", done: false },
      { text: "每周训练 3 次", done: false },
    ],
    goalsNote: "目标可以在机器人和应用里勾选",
    routeCaption: "路线示例",
  },
  ai: {
    title: "说出来就行",
    lede: "AI 助手听得懂“明天加深蹲，3×10，60 公斤”，并自动记录",
    assistant: "AI 助手",
    user: "明天加训练：深蹲 3×10，60 公斤",
    reply: ["已记录到明天", "深蹲，3 组 10 次，60 公斤"],
    caption: "对话示例",
    promptsLabel: "示例问题",
    prompts: [
      {
        label: "添加训练",
        user: "明天加训练：深蹲 3×10，60 公斤",
        reply: ["已记录到明天", "深蹲，3 组 10 次，60 公斤"],
      },
      {
        label: "我深蹲了多少",
        user: "这个月我深蹲了多少",
        reply: ["这个月：12 组", "最好：80 公斤，平均：65 公斤"],
      },
      {
        label: "我的进度",
        user: "我的体重进度如何",
        reply: ["体重：两个月减少 4 公斤", "训练量：增加 18%"],
      },
    ],
  },
  progress: {
    title: "进度看得见",
    lede: "体重、围度和训练量，一屏掌握",
    panel: "动态",
    weight: "体重",
    volume: "训练量",
    months: ["9月", "10月", "11月"],
    caption: "图表示例",
    measurementsTitle: "最新围度",
    measurementsNote: "围度示例",
    measurements: [
      { label: "体重", value: "78.2 公斤" },
      { label: "腰围", value: "83 厘米" },
      { label: "胸围", value: "101 厘米" },
    ],
    rangeLabel: "周期",
    ranges: [
      { label: "3 个月", months: ["9月", "10月", "11月"] },
      { label: "6 个月", months: ["6月", "7月", "8月", "9月", "10月", "11月"] },
    ],
  },
  levels: {
    title: "每一次训练都让你升级",
    lede: "从新手到传奇的八个等级：训练和动作都会积累积分",
    rule: "每次训练 10 分，每个动作 2 分",
    note: "等级会随着积分自动提升",
    pointsLabel: "分",
    items: [
      { name: "新手", points: "0" },
      { name: "业余", points: "100" },
      { name: "进阶", points: "300" },
      { name: "高级", points: "600" },
      { name: "专业", points: "1000" },
      { name: "大师", points: "1500" },
      { name: "达人", points: "2500" },
      { name: "传奇", points: "4000" },
    ],
  },
  developer: {
    title: "ESPADA ENTERTAINMENT",
    lede: "Tracky 和 Espada Sports 项目背后的团队",
    about:
      "ESPADA SPORTS 在 YouTube 讲述足球，Tracky 记录训练",
    stats: [
      { value: "4400", label: "YouTube 订阅者" },
      { value: "600万", label: "视频播放量" },
    ],
    projectsLabel: "项目",
    projects: [
      { name: "ESPADA SPORTS", role: "足球频道" },
      { name: "Tracky", role: "训练日志" },
    ],
    channel: "YouTube",
    handle: "@espadasportsru",
  },
  cta: {
    title: "从一次训练开始",
    copy: "日记、计划和进度都已经在里面",
    button: "在 Telegram 中打开",
    copyHandle: "复制 @AiTrackyBot",
    copied: "已复制",
  },
  footer: { note: "应用截图" },
  weekLog: {
    title: "本周",
    sample: "记录示例",
    days: ["一", "二", "三", "四", "五", "六", "日"],
    workoutType: "力量",
    minutes: "45 分钟",
    exercises: ["深蹲", "卧推", "俯身划船"],
    kg: "公斤",
    done: "已完成",
    caption: "Tracky 记录示例",
    hint: "点按动作",
  },
  a11y: {
    skip: "跳到内容",
    weekExample: "本周训练示例",
    programExample: "每周计划示例",
    languages: "支持的语言",
    chartExample: "体重和训练量图表示例",
    logoBack: "Tracky，返回顶部",
    done: "已完成",
    notDone: "未完成",
    rest: "休息",
    today: "今天",
    backToTop: "返回顶部",
  },
};

export const CONTENT: Record<Language, LandingContent> = {
  ru,
  en,
  de,
  fr,
  es,
  zh,
};

export const LANGUAGE_META: Array<{
  code: Language;
  short: string;
  label: string;
}> = [
  { code: "en", short: "EN", label: "English" },
  { code: "ru", short: "RU", label: "Русский" },
  { code: "zh", short: "ZH", label: "中文" },
  { code: "fr", short: "FR", label: "Français" },
  { code: "de", short: "DE", label: "Deutsch" },
  { code: "es", short: "ES", label: "Español" },
];
