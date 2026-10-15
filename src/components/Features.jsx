import React, { useState } from "react";
import {
  Sparkles,
  Target,
  Utensils,
  CalendarDays,
  ArrowUpRight,
  ChevronRight,
  ChartNoAxesColumnIncreasing,
  UsersRound,
  Search,
  Leaf,
  Check,
  Map,
  Bell,
} from "lucide-react";

export default function Features() {
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [searchMember, setSearchMember] = useState("");

  const meals = [
    {
      type: "BREAKFAST",
      name: "Oats & berries",
      calories: "420 kcal",
      protein: "18g protein",
      carbs: "52g carbs",
      fat: "12g fat",
      image: "/oats.jpg",
    },
    {
      type: "LUNCH",
      name: "Paneer & rice bowl",
      calories: "520 kcal",
      protein: "26g protein",
      carbs: "64g carbs",
      fat: "14g fat",
      image: "/paneer.jpg",
    },
    {
      type: "DINNER",
      name: "Lentil & vegetable bowl",
      calories: "480 kcal",
      protein: "22g protein",
      carbs: "58g carbs",
      fat: "12g fat",
      image: "/lentil.jpg",
    },
  ];

  const members = [
    {
      initial: "A",
      name: "Aarav Sharma",
      plan: "Annual membership",
      status: "Active",
    },
    {
      initial: "P",
      name: "Priya Mehta",
      plan: "Monthly membership",
      status: "Active",
    },
    {
      initial: "R",
      name: "Rohan Verma",
      plan: "Quarterly membership",
      status: "Expiring",
    },
    {
      initial: "S",
      name: "Sneha Kapoor",
      plan: "Personal training",
      status: "Active",
    },
  ];

  const revenueBreakdown = [
    { label: "Memberships", percent: "65%", color: "bg-blue-500" },
    { label: "Personal training", percent: "20%", color: "bg-violet-500" },
    { label: "Products", percent: "8%", color: "bg-cyan-500" },
    { label: "Other", percent: "7%", color: "bg-emerald-400" },
  ];

  const attendance = [
    { day: "Mon", height: 61 },
    { day: "Tue", height: 94 },
    { day: "Wed", height: 125 },
    { day: "Thu", height: 74 },
    { day: "Fri", height: 43 },
    { day: "Sat", height: 27 },
    { day: "Sun", height: 52 },
  ];

  const plans = [
    {
      name: "Basic Plan",
      price: "₹1,000",
      features: ["Gym access", "Standard hours", "Mobile app access"],
    },
    {
      name: "Pro Plan",
      price: "₹2,500",
      features: ["Anytime access", "Personal training", "Nutrition guidance"],
      featured: true,
    },
    {
      name: "Elite Plan",
      price: "₹5,000",
      features: ["All Pro features", "Group classes", "Priority support"],
    },
  ];

  const locations = ["All Locations", "Mumbai", "New York", "London", "Dubai"];

  const locationPositions = {
    "All Locations": [
      { name: "New York", x: 12, y: 43 },
      { name: "London", x: 52, y: 17 },
      { name: "Mumbai", x: 72, y: 73 },
    ],
    Mumbai: [{ name: "Mumbai", x: 50, y: 45 }],
    "New York": [{ name: "New York", x: 50, y: 45 }],
    London: [{ name: "London", x: 50, y: 45 }],
    Dubai: [{ name: "Dubai", x: 50, y: 45 }],
  };

  const filteredMembers = members.filter((member) =>
    `${member.name} ${member.plan} ${member.status}`
      .toLowerCase()
      .includes(searchMember.toLowerCase()),
  );

  return (
    <section id="features" className="bg-black px-4 py-12 text-white sm:px-6 md:py-24">
      {/* FEATURES HEADING */}
      <div className="mb-10 flex flex-col items-center text-center md:mb-16">
        <span className="mb-4 text-[20px] font-bold uppercase tracking-[0.3em] text-white">
          FEATURES
        </span>

        <h2 className="text-3xl font-bold leading-tight md:text-5xl">
          Everything you need. One <span className="blue-text">powerful</span> platform.
        </h2>

        <p className="mt-4 text-gray-400">Less admin. More time for your members.</p>
      </div>

      <div className="mx-auto max-w-[1180px] space-y-5">
        {/* 1. AI DIET PLAN */}
        <div className="grid gap-8 rounded-[24px] border border-[#0754a5] bg-gradient-to-br from-[#080f1c] to-[#050911] p-5 shadow-[0_0_35px_rgba(0,85,180,0.08)] sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-9">
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1d70fd]/30 bg-[#142344] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-[#60a5fa]">
              <Sparkles size={12} />
              AI-POWERED
            </span>

            <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">AI Diet Plan</h3>

            <h4 className="mt-3 text-2xl font-bold leading-tight text-slate-200 sm:text-[26px]">
              Personalised nutrition.
              <br />
              Made simple.
            </h4>

            <p className="mt-5 max-w-md text-sm leading-5 text-slate-400">
              Create personalised meal plans around each member&apos;s goals and food preferences.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-xl border border-[#1e2b40] bg-[#101827] px-3 py-2 text-xs">
                <Target size={14} className="text-[#60a5fa]" />
                Goals
              </span>

              <span className="inline-flex items-center gap-2 rounded-xl border border-[#1e2b40] bg-[#101827] px-3 py-2 text-xs">
                <Utensils size={14} className="text-[#60a5fa]" />
                Food preferences
              </span>

              <span className="inline-flex items-center gap-2 rounded-xl border border-[#1e2b40] bg-[#101827] px-3 py-2 text-xs">
                <CalendarDays size={14} className="text-[#60a5fa]" />
                Meal planning
              </span>
            </div>

            <button
              type="button"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#2563eb] px-5 py-3.5 text-xs font-semibold shadow-[0_0_25px_rgba(37,99,235,0.22)] transition hover:bg-[#1d4ed8]"
            >
              Explore AI Diet Plan
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* MEAL PLAN PREVIEW */}
          <div className="w-full rounded-2xl border border-[#1c293b] bg-[#080e18] p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#172337] pb-3">
              <h4 className="flex items-center gap-2 text-xs font-semibold">
                <Sparkles size={14} className="text-[#60a5fa]" />
                Your daily meal plan
              </h4>

              <div className="flex items-center rounded-lg border border-[#1c293c] bg-[#0c1525] p-0.5 text-[10px]">
                <button type="button" className="rounded-md bg-[#2563eb] px-3 py-1.5">
                  Today
                </button>
                <button
                  type="button"
                  className="rounded-md px-3 py-1.5 text-slate-400 hover:text-white"
                >
                  This week
                </button>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-[#1c315b] bg-[#101b36] px-2.5 py-1.5 text-[10px] text-[#93c5fd]">
                <Sparkles size={11} />
                Build muscle
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-md border border-[#18372f] bg-[#0c201e] px-2.5 py-1.5 text-[10px] text-emerald-400">
                <Leaf size={11} />
                Vegetarian
              </span>
            </div>

            <div className="mt-3 space-y-2">
              {meals.map((meal) => (
                <div
                  key={meal.type}
                  className="flex items-center gap-3 rounded-xl border border-[#1c293c] bg-[#0d1422] p-2.5 sm:p-3"
                >
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-md border border-[#26354a] bg-[#121d2c]">
                    {meal.image && (
                      <img
                        src={meal.image}
                        alt={meal.name}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] tracking-wide text-slate-400">{meal.type}</p>

                    <h5 className="truncate text-xs font-semibold sm:text-sm">{meal.name}</h5>

                    <div className="mt-1 flex flex-wrap gap-x-2 text-[9px] leading-4 text-slate-400 sm:text-[10px]">
                      <span>{meal.calories}</span>
                      <span className="text-slate-600">|</span>
                      <span>{meal.protein}</span>
                      <span className="text-slate-600">|</span>
                      <span>{meal.carbs}</span>
                      <span className="text-slate-600">|</span>
                      <span>{meal.fat}</span>
                    </div>
                  </div>

                  <ChevronRight size={16} className="shrink-0 text-slate-500" />
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-[#214a82] bg-[#0c1525] py-2.5 text-xs text-[#60a5fa] transition hover:bg-[#122441]"
            >
              <Sparkles size={14} />
              Generate meal plan
            </button>
          </div>
        </div>

        {/* 2. REVENUE + MEMBER MANAGEMENT */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[1.45fr_1fr]">
          {/* REVENUE AND FINANCIAL INSIGHTS */}
          <div className="min-w-0 rounded-[24px] border border-[#1c354d] bg-[#08121e] p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0b2b4c] text-[#60a5fa]">
                  <ChartNoAxesColumnIncreasing size={23} strokeWidth={1.7} />
                </div>

                <div>
                  <h3 className="text-base font-bold sm:text-lg">
                    Revenue &amp; financial insights
                  </h3>
                  <p className="mt-1 text-xs leading-4 text-slate-400">
                    Track income, memberships and growth with
                    <br className="hidden sm:block" />
                    real-time financial reports.
                  </p>
                </div>
              </div>

              <button type="button" className="hidden shrink-0 text-[10px] text-[#3b9bff] sm:block">
                Explore feature ↗
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-[1.7fr_1fr] sm:items-end">
              <div className="min-w-0">
                <p className="text-[10px] text-slate-400">Total Revenue</p>

                <div className="mt-1 flex flex-wrap items-center gap-4">
                  <span className="text-3xl font-bold">$12.4K</span>
                  <span className="rounded-full bg-[#07382b] px-3 py-2 text-xs font-semibold text-emerald-400">
                    +12%
                  </span>
                </div>

                <div className="mt-4">
                  <svg
                    viewBox="0 0 350 125"
                    className="h-auto w-full"
                    role="img"
                    aria-label="Revenue trend from January to June"
                  >
                    {[20, 54, 88, 122].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="350"
                        y2={y}
                        stroke="#1b2b3c"
                        strokeWidth="1"
                      />
                    ))}

                    <path
                      d="M 0 119 C 25 128, 35 104, 57 106 S 84 111, 107 85 S 143 62, 163 70 S 196 73, 220 53 S 256 25, 278 40 S 313 59, 350 16"
                      fill="none"
                      stroke="#1684ff"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month) => (
                      <span key={month}>{month}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#20344a] bg-[#07101b] p-3.5">
                <h4 className="text-[10px] font-semibold">Revenue breakdown</h4>

                <div className="mt-5 space-y-4">
                  {revenueBreakdown.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-2 text-[9px]"
                    >
                      <span className="flex min-w-0 items-center gap-2 text-slate-400">
                        <span className={`h-1.5 w-1.5 shrink-0 rounded-sm ${item.color}`} />
                        {item.label}
                      </span>
                      <span className="shrink-0 text-slate-300">{item.percent}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button type="button" className="mt-5 text-[10px] text-[#3b9bff] sm:hidden">
              Explore feature ↗
            </button>
          </div>

          {/* MEMBER MANAGEMENT */}
          <div className="min-w-0 rounded-[24px] border border-[#1c354d] bg-[#08121e] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0b2b4c] text-[#60a5fa]">
                <UsersRound size={25} strokeWidth={1.6} />
              </div>

              <div>
                <h3 className="text-base font-bold sm:text-lg">Member management</h3>
                <p className="mt-1 text-xs leading-4 text-slate-400">
                  Add, manage and engage with ease.
                </p>
              </div>
            </div>

            <button type="button" className="mt-4 text-[10px] text-[#3b9bff]">
              Explore feature ↗
            </button>

            <div className="mt-1 flex items-center gap-2 rounded-lg border border-[#20364e] bg-[#101e2e] px-3 py-2.5">
              <Search size={12} className="shrink-0 text-slate-400" />
              <input
                type="text"
                value={searchMember}
                onChange={(e) => setSearchMember(e.target.value)}
                placeholder="Search members..."
                aria-label="Search members"
                className="w-full min-w-0 bg-transparent text-xs outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="mt-2 space-y-1.5">
              {filteredMembers.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-3 rounded-lg py-1 transition hover:bg-[#101e2e]"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#244568] text-xs font-semibold">
                    {member.initial}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-semibold">{member.name}</p>
                    <p className="truncate text-[9px] text-slate-400">{member.plan}</p>
                  </div>

                  <span
                    className={`min-w-[67px] rounded-md px-2 py-1 text-center text-[9px] ${
                      member.status === "Expiring"
                        ? "bg-[#443710] text-amber-300"
                        : "bg-[#0c3528] text-emerald-400"
                    }`}
                  >
                    {member.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. ATTENDANCE + MEMBERSHIP PLANS */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ATTENDANCE TRACKING */}
          <div className="min-w-0 rounded-[24px] border border-[#1c354d] bg-[#08121e] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0b2b4c] text-[#60a5fa]">
                <Check size={28} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-lg font-bold sm:text-xl">Attendance tracking</h3>
                <p className="mt-1 text-sm leading-5 text-slate-400">
                  Monitor check-ins, track activity
                  <br />
                  and keep your gym running smoothly.
                </p>
              </div>
            </div>

            <button type="button" className="mt-1 text-[11px] text-[#1684ff]">
              Explore feature ↗
            </button>

            <div className="relative mt-5 rounded-xl border border-[#20364e] bg-[#07101b] px-5 pb-2 pt-14">
              <div className="absolute right-3 top-4 flex w-[58%] items-center gap-3 rounded-xl border border-[#2b5277] bg-[#102131] p-3 sm:right-5 sm:w-[55%]">
                <Check size={22} className="shrink-0 text-emerald-400" />
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold">Check-in successful</p>
                  <p className="mt-1 truncate text-[10px] text-slate-400">Aarav Sharma · 6:24 PM</p>
                </div>
              </div>

              <div className="flex h-[170px] items-end justify-between gap-3">
                {attendance.map((bar, index) => (
                  <div
                    key={bar.day}
                    className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                  >
                    <div
                      style={{ height: `${bar.height}px` }}
                      className={`w-full max-w-[22px] rounded-t-md ${
                        index < 3 ? "bg-[#1684ff]" : "bg-[#174e80]"
                      }`}
                    />
                    <span className="text-[10px] text-slate-400">{bar.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FLEXIBLE MEMBERSHIP PLANS */}
          <div className="min-w-0 rounded-[24px] border border-[#1c354d] bg-[#08121e] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0b2b4c] text-[#60a5fa]">
                <CalendarDays size={29} strokeWidth={1.6} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold sm:text-xl">Flexible membership plans</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Create custom plans, offers and billing cycles.
                </p>
              </div>

              <button type="button" className="hidden shrink-0 text-[11px] text-[#1684ff] sm:block">
                Explore feature ↗
              </button>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex min-w-0 flex-col rounded-2xl border p-3.5 ${
                    plan.featured
                      ? "border-[#1684ff] bg-[#0a1626]"
                      : "border-[#20364e] bg-[#0d1a28]"
                  }`}
                >
                  <p className="text-xs text-slate-400">{plan.name}</p>

                  <p className="mt-3 text-2xl font-bold">{plan.price}</p>
                  <p className="mt-0.5 text-[10px] text-slate-400">/ month</p>

                  <ul className="mt-3 flex-1 space-y-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="text-[11px] leading-4 text-slate-400">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={`mt-6 rounded-full px-3 py-3 text-xs font-semibold transition ${
                      plan.featured
                        ? "bg-[#1684ff] text-white hover:bg-blue-600"
                        : "bg-[#192c3e] text-white hover:bg-[#233c53]"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. MULTI-LOCATION + AUTOMATED REMINDERS */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[1.15fr_0.95fr]">
          {/* MULTI-LOCATION CONTROL */}
          <div className="min-w-0 rounded-[24px] border border-[#1c354d] bg-[#08121e] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0b2b4c] text-[#60a5fa]">
                <Map size={29} strokeWidth={1.6} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold sm:text-xl">Multi-location control</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Manage multiple branches from a single dashboard.
                </p>
              </div>

              <button type="button" className="hidden shrink-0 text-[11px] text-[#1684ff] sm:block">
                Explore feature ↗
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 items-center gap-5 sm:grid-cols-[1.3fr_1fr]">
              <div className="relative min-h-[200px]">
                <svg
                  viewBox="0 0 340 190"
                  className="absolute inset-0 h-full w-full"
                  aria-label="Connected gym locations"
                >
                  <path
                    d="M30 105 L155 58 L305 95 L215 155 Z"
                    fill="none"
                    stroke="#1679d4"
                    strokeWidth="1.8"
                  />
                  <path d="M155 58 L215 155" fill="none" stroke="#1679d4" strokeWidth="1.8" />
                </svg>

                {locationPositions[selectedLocation].map((location) => (
                  <div
                    key={location.name}
                    className="absolute flex items-center gap-2"
                    style={{
                      left: `${location.x}%`,
                      top: `${location.y}%`,
                      transform: "translate(-10%, -50%)",
                    }}
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1684ff]" />
                    <span className="whitespace-nowrap text-xs font-semibold">{location.name}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-[#20364e] bg-[#0d1a28] p-3">
                <p className="mb-2 text-xs text-slate-400">Switch location</p>

                <div className="space-y-1">
                  {locations.map((location) => (
                    <button
                      type="button"
                      key={location}
                      onClick={() => setSelectedLocation(location)}
                      className={`w-full rounded-md px-3 py-2 text-left text-[11px] transition ${
                        selectedLocation === location
                          ? "bg-[#153d65] text-white"
                          : "text-slate-400 hover:bg-[#142438] hover:text-white"
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AUTOMATED REMINDERS */}
          <div className="min-w-0 rounded-[24px] border border-[#1c354d] bg-[#08121e] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0b2b4c] text-[#60a5fa]">
                <Bell size={28} strokeWidth={1.6} />
              </div>

              <div>
                <h3 className="text-lg font-bold sm:text-xl">Automated reminders</h3>
                <p className="mt-1 text-sm leading-5 text-slate-400">
                  Keep members engaged with WhatsApp
                  <br className="hidden sm:block" />
                  and email reminders.
                </p>
              </div>
            </div>

            <button type="button" className="mt-2 text-[11px] text-[#1684ff]">
              Explore feature ↗
            </button>

            <div className="mt-5 rounded-2xl border border-[#24588a] bg-[#0c1d2d] p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white">
                  <Check size={27} strokeWidth={3} />
                </div>

                <div>
                  <p className="text-sm font-bold">GymX</p>
                  <p className="mt-1 text-[11px] text-slate-400">Renewal reminder</p>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold">Hi Priya! 👋</p>

                <p className="mt-2 text-sm leading-5 text-slate-400">
                  Your membership is expiring in 7 days.
                  <br />
                  Renew now to continue your fitness journey!
                </p>
              </div>

              <button
                type="button"
                className="mt-5 block w-full text-center text-sm font-semibold text-[#1684ff] transition hover:text-blue-300"
              >
                Renew Membership
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
