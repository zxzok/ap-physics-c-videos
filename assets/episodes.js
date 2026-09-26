window.EPISODE_DATA = {
 "units": [
  {
   "id": 1,
   "zh": "Unit 1 · 运动学",
   "en": "Unit 1 · Kinematics",
   "eps": [
    "02",
    "11",
    "12",
    "13",
    "14",
    "15"
   ]
  },
  {
   "id": 2,
   "zh": "Unit 2 · 牛顿定律",
   "en": "Unit 2 · Newton's Laws",
   "eps": [
    "16",
    "17",
    "01",
    "04",
    "05",
    "06",
    "18"
   ]
  },
  {
   "id": 3,
   "zh": "Unit 3 · 功、能量与功率",
   "en": "Unit 3 · Work, Energy, and Power",
   "eps": [
    "03",
    "07",
    "08",
    "09",
    "10"
   ]
  }
 ],
 "episodes": {
  "01": {
   "num": "01",
   "slug": "01-friction",
   "title": {
    "zh": "摩擦力",
    "en": "Friction"
   },
   "problems": {
    "zh": "静/动摩擦、f–F 图、斜面临界角、最省力拉角（求导）、刹车距离与 ABS、缆桩 e^{μθ}",
    "en": "Static vs. kinetic friction, the f–F graph, critical angle, optimal pulling angle (calculus), braking distance & ABS, the capstan e^{μθ}"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/01-friction.mp4",
     "poster": "posters/zh/01-friction.jpg",
     "duration": 850.6,
     "chapters": [
      {
       "t": 0.0,
       "title": "开场"
      },
      {
       "t": 24.33,
       "title": "① 摩擦力的方向"
      },
      {
       "t": 97.6,
       "title": "② 摩擦力从哪来？"
      },
      {
       "t": 216.87,
       "title": "③ 静摩擦 vs 动摩擦"
      },
      {
       "t": 317.47,
       "title": "④ 斜面：谁先滑下去？"
      },
      {
       "t": 425.8,
       "title": "⑤ 用微积分找最省力的角度"
      },
      {
       "t": 533.4,
       "title": "⑥ 刹车距离与 ABS"
      },
      {
       "t": 661.2,
       "title": "★ 挑战题：一根绳子的魔法"
      },
      {
       "t": 782.77,
       "title": "总结"
      }
     ],
     "transcript": [
      {
       "title": "开场",
       "lines": [
        "欢迎来到 AP 物理 C 的摩擦力专题。",
        "摩擦力可能是你最熟悉的一种力，却也是最容易想错的一种力。",
        "今天，我们用六个问题，再加一道挑战题，把摩擦力彻底搞明白。",
        "每个问题出现的时候，建议你先按下暂停，自己想一想，再往下看。"
       ]
      },
      {
       "title": "① 摩擦力的方向",
       "lines": [
        "先来看第一个问题：你向前走路的时候，地面给你脚的摩擦力，是朝前，还是朝后？",
        "很多人会脱口而出：朝后，因为摩擦力总是阻碍运动嘛。",
        "但正确答案恰恰相反：朝前！",
        "我们盯住后面这只脚。迈步的时候，脚掌其实是在向后蹬地面。",
        "如果地面是光滑的冰，脚就会向后打滑，你会在原地摔倒。",
        "摩擦力的作用，正是阻止这种向后的滑动。所以，地面对脚的摩擦力指向前方。",
        "正是这个向前的摩擦力，推着你往前走。没有它，你一步也走不了。",
        "所以请记住：摩擦力阻碍的，是接触面之间的相对滑动，或者相对滑动的趋势，而不一定是物体的运动。",
        "汽车也是同样的道理：发动机让车轮向后推地面，地面的静摩擦力就向前推动汽车。",
        "没有摩擦力，车轮只会在原地空转。"
       ]
      },
      {
       "title": "② 摩擦力从哪来？",
       "lines": [
        "摩擦力到底是从哪里来的？",
        "再光滑的表面，放到显微镜下，都是坑坑洼洼的，就像两片起伏的山脉。",
        "两个表面真正接触的，其实只有少数几个“山顶”。在这些接触点上，原子之间相互吸引，甚至互相卡住。",
        "想让箱子滑动，就得把这些接触点扯开、翻越过去。每个接触点都在抵抗滑动，这就是摩擦力的来源。",
        "如果把箱子压得更紧，山峰被压扁，真正接触的点就更多，摩擦力也就更大。",
        "实验发现：摩擦力的大小，和两个表面之间的正压力，也就是法向力 N，近似成正比。",
        "比例系数叫做摩擦系数 μ。它没有单位，只由两种接触材料决定。比如轮胎在干燥路面上，μ 大约在 0.7 到 1 之间；而冰在冰上，只有零点零几。",
        "第二个问题：同一块砖，平放和侧放，接触面积差了好几倍。哪种放法，推动它需要的力更大？",
        "答案是：一样大。",
        "平放时，重量分散在大面积上，每个地方都压得比较轻，真正的接触点很稀疏。",
        "侧放时，面积变小了，但每个地方压得更重，接触点反而更密集。",
        "两者一抵消，真正的接触面积差不多。所以摩擦力只由 μ 和 N 决定，和表观接触面积无关。",
        "那么，F1 赛车为什么要用那么宽的轮胎呢？这个问题留给你课后查一查。提示：橡胶很软，它并不完全遵守这个简单的规律。"
       ]
      },
      {
       "title": "③ 静摩擦 vs 动摩擦",
       "lines": [
        "第三个问题：一个 10 千克的箱子放在地上，静摩擦系数 μs 等于 0.5。你用 20 牛的力水平推它，没有推动。这时，箱子受到的摩擦力是多少？",
        "很多同学会这样算：μs 乘以 N，0.5 乘以 98 牛，等于 49 牛。",
        "但这是错的！箱子没有动，加速度为零，水平方向的合力必须为零。所以摩擦力正好等于你的推力：20 牛。",
        "静摩擦力就像一个聪明的对手：你推多大力，它就还你多大力。",
        "但它的能力是有上限的：最大静摩擦力等于 μs 乘以 N，也就是 49 牛。",
        "推力一旦超过这个上限，箱子就开始滑动。",
        "滑动以后，摩擦力就变成了动摩擦力，大小等于 μk 乘以 N，基本不再变化。这里 μk 是 0.3，动摩擦力约为 29 牛。",
        "通常 μk 比 μs 小。这就是为什么推箱子时，起步最费劲，一旦推动了，反而会轻松一些。",
        "所以请牢牢记住这两条公式。静摩擦是“小于等于”，它的具体大小要用牛顿第二定律来求，μs N 只是它的最大值。",
        "而动摩擦才是“等于” μk N。把静摩擦直接写成 μs N，是 AP 考试里最常见的陷阱之一。"
       ]
      },
      {
       "title": "④ 斜面：谁先滑下去？",
       "lines": [
        "第四个问题：一块木板上放着一个重箱子和一个轻箱子，材料完全相同。把木板慢慢抬高，谁会先滑下去？",
        "直觉上，重箱子的下滑力更大，好像更容易滑。但它受到的摩擦力也更大。我们来仔细算一算。",
        "先把重力 mg 分解成两个方向：沿斜面向下的 mg sinθ，和垂直于斜面的 mg cosθ。",
        "垂直斜面方向没有运动，所以法向力 N 等于 mg cosθ。",
        "沿斜面方向，箱子保持静止，所以静摩擦力正好等于 mg sinθ。",
        "随着角度增大，下滑分量 mg sinθ 越来越大；而最大静摩擦力 μs mg cosθ，却因为法向力变小而越来越小。",
        "当两者相等的那一刻，箱子就处在要滑还没滑的临界状态。这个角度叫做临界角。",
        "列出方程：mg sinθc 等于 μs mg cosθc。两边的 mg 可以约掉，得到：tanθc 等于 μs。",
        "质量被约掉了！临界角只和 μs 有关，和质量无关。所以轻箱子和重箱子，会在同一个角度，同时开始下滑。",
        "这也是测量 μs 最简单的方法：慢慢抬高斜面，记下物体刚好开始滑动的角度，取正切就行。比如 μs 等于 0.5，临界角大约是 26.6 度。"
       ]
      },
      {
       "title": "⑤ 用微积分找最省力的角度",
       "lines": [
        "第五个问题：用绳子拉一个箱子，让它在地面上匀速滑动。绳子是水平拉最省力，还是斜向上拉更省力？如果斜着拉，多少度最好？",
        "设拉力 F 与水平方向成 θ 角，动摩擦系数为 μ。先画出受力图。",
        "竖直方向：N 加上 F sinθ 等于 mg，所以 N 等于 mg 减去 F sinθ。斜向上拉，相当于把箱子往上提了一点，地面的压力变小，摩擦力也跟着变小。",
        "水平方向匀速运动：F cosθ 等于摩擦力 μN。",
        "把两个式子联立，解出：F 等于 μ mg，除以 cosθ 加 μ sinθ。",
        "角度太小，没有利用到往上提的效果；角度太大，向前拉的分量又太小。所以中间一定存在一个最佳角度。",
        "要让 F 最小，就要让分母最大。这正是微积分登场的时候：对 θ 求导，并令导数等于零。",
        "于是得到：tanθ* 等于 μ。",
        "如果 μ 等于 0.5，最佳角度约为 26.6 度，需要的拉力比水平拉小了大约百分之十。",
        "反过来，如果是斜向下推，比如推割草机，法向力反而会变大，更加费力。",
        "再想一想：这个最省力的角度，和上一题斜面的临界角，都等于arctan μ。这是巧合吗？我们把它留作思考题。"
       ]
      },
      {
       "title": "⑥ 刹车距离与 ABS",
       "lines": [
        "第六个问题：开车时，车速从每小时 30 英里提高到 60 英里，也就是翻了一倍。紧急刹车时，刹车距离会变成几倍？",
        "我们用下一单元要学的功能定理来算。刹车时，地面的摩擦力做负功，把汽车的动能全部变成了热。",
        "也就是：μk m g 乘以 d，等于二分之一 m v 平方。质量又一次被约掉，得到：d 等于 v 平方，除以 2 μk g。",
        "刹车距离和速度的平方成正比！速度翻倍，刹车距离不是变成两倍，而是四倍。",
        "代入数字：干燥路面上，μk 大约是 0.7。时速 30 英里，也就是每秒约 13 米，刹车距离约 13 米；时速 60 英里，刹车距离约 52 米，差不多是十一辆车首尾相连那么长。",
        "而且，这还没有算上司机的反应时间。高速公路上要保持更远的车距，道理就在这里。",
        "那么，现代汽车为什么都装有 ABS 防抱死系统呢？",
        "车轮正常滚动时，轮胎上的每一点都在画这样的曲线。注意看：每当这个点接触地面时，它的速度恰好为零。",
        "也就是说，轮胎和地面的接触点，在那一瞬间相对地面是静止的。所以滚动的轮胎受到的是静摩擦力。",
        "如果刹车踩得太猛，车轮被抱死不转，轮胎就在地面上拖着滑动，变成了动摩擦。",
        "因为 μs 大于 μk，滚动时能提供的最大刹车力更大。ABS 每秒钟松开、踩紧刹车很多次，让车轮始终处在将滑未滑的状态。这样刹车距离更短，而且方向盘还能控制方向。"
       ]
      },
      {
       "title": "★ 挑战题：一根绳子的魔法",
       "lines": [
        "最后是一道挑战题。在码头上，水手只用一只手，就能拉住一艘几百吨的大船。秘诀是：把缆绳在缆桩上多绕几圈。为什么绕上几圈，力量就能放大这么多倍呢？",
        "从上往下看缆桩。船那一端的拉力很大，手这一端的拉力很小。绳子想往船那边滑，缆桩就用摩擦力拦住它。",
        "取其中很小的一段绳子，它对应的圆心角是 dθ。这一段两端的张力，分别是 T 和 T 加 dT。",
        "由于绳子是弯的，两端张力的合力会把绳子压向桩子，桩子就给绳子一个法向力 dN，大小约等于 T 乘以 dθ。",
        "这一小段能提供的最大静摩擦力是 μ dN，正是它平衡了两端张力的差值 dT。",
        "所以，dN 约等于 T dθ，而 dT 等于 μ T dθ。",
        "这是一个可分离变量的微分方程，和你们刚学过的带空气阻力的运动方程，是同一个套路：把 T 移到左边，两边同时积分。",
        "得到：T 船与 T 手之比的自然对数，等于 μ 乘以 θ。也就是说，T 船等于 T 手，乘以 e 的 μ θ 次方。",
        "张力随着缠绕的角度指数增长！假设 μ 等于 0.3：绕一圈，放大约 6.6 倍；绕两圈，约 43 倍；绕三圈，约 286 倍；绕五圈，超过一万两千倍。",
        "所以，水手手上只要用 100 牛的力，大概就是拎起一袋 10 公斤大米的力气，绕上五圈，就能挡住一百多万牛的拉力。这就是指数增长的力量。"
       ]
      },
      {
       "title": "总结",
       "lines": [
        "最后，我们把今天的内容串一遍。",
        "摩擦力阻碍的是相对滑动；静摩擦是小于等于，要用牛顿第二定律来求；动摩擦等于 μk N；摩擦力与接触面积无关。",
        "斜面临界角的正切等于 μs；最省力拉角的正切等于 μ；刹车距离与速度的平方成正比；而绳子绕在桩上，张力按指数增长。",
        "留两道思考题给你。第一题：用双手夹住一本书，书保持静止。如果你把手压得更紧，书受到的摩擦力会变大吗？",
        "第二题：为什么最省力的拉力角，和斜面的临界角，都等于arctan μ？提示：把法向力和摩擦力合成一个总的接触力，看看它的方向。",
        "想清楚这两道题，摩擦力这一关，你就真正过了。我们下期再见！"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/01-friction.mp4",
     "poster": "posters/en/01-friction.jpg",
     "duration": 846.3,
     "chapters": [
      {
       "t": 0.0,
       "title": "Intro"
      },
      {
       "t": 24.07,
       "title": "① Which way does friction point?"
      },
      {
       "t": 93.73,
       "title": "② Where does friction come from?"
      },
      {
       "t": 208.57,
       "title": "③ Static vs. kinetic friction"
      },
      {
       "t": 308.1,
       "title": "④ Incline: which box slides first?"
      },
      {
       "t": 419.73,
       "title": "⑤ Calculus: the best angle to pull"
      },
      {
       "t": 532.6,
       "title": "⑥ Braking distance and ABS"
      },
      {
       "t": 658.96,
       "title": "★ Challenge: the magic of a rope"
      },
      {
       "t": 780.7,
       "title": "Summary"
      }
     ],
     "transcript": [
      {
       "title": "Intro",
       "lines": [
        "Welcome to the AP Physics C lesson on friction.",
        "Friction may be the force you know best, but it's also the easiest one to get wrong.",
        "Today, we'll use six questions, plus one challenge problem, to really nail down friction.",
        "When each question appears, pause the video and think it through yourself before you keep watching."
       ]
      },
      {
       "title": "① Which way does friction point?",
       "lines": [
        "First question: when you walk forward, does the ground's friction on your foot point forward, or backward?",
        "A lot of people blurt out: backward, because friction always opposes motion.",
        "But the right answer is the opposite: forward!",
        "Watch the back foot. As you take a step, that foot is actually pushing backward on the ground.",
        "If the ground were smooth ice, your foot would slip backward, and you'd fall right where you stand.",
        "Friction's job is to stop exactly that backward slip. So the ground's friction on your foot points forward.",
        "That forward friction is what pushes you ahead. Without it, you couldn't take a single step.",
        "So remember: friction opposes relative sliding between the surfaces, or the tendency to slide. It doesn't necessarily oppose the object's motion.",
        "Cars work the same way. The engine makes the wheels push back on the road, and the road's static friction pushes the car forward.",
        "Without friction, the wheels would just spin in place."
       ]
      },
      {
       "title": "② Where does friction come from?",
       "lines": [
        "So where does friction actually come from?",
        "Even the smoothest surface is bumpy under a microscope, like two rugged mountain ranges.",
        "The two surfaces really touch at only a few peaks. At these contact points, atoms attract each other and can even lock together.",
        "To slide the box, you have to break these contacts or climb over them. Every contact point resists sliding, and that's where friction comes from.",
        "If you press the box down harder, the peaks get squashed, more points touch, and friction gets bigger.",
        "Experiments show that friction is roughly proportional to how hard the surfaces press together. That's the normal force, N.",
        "The constant is called the coefficient of friction, μ. It has no units, and it depends only on the two materials in contact. For a tire on a dry road, μ is about 0.7 to 1; for ice on ice, it's only a few hundredths.",
        "Question two: take the same brick, laid flat or stood on its end. The contact areas differ by several times. Which way takes more force to push?",
        "The answer: it's the same.",
        "Laid flat, the weight spreads over a large area. Each spot presses lightly, so the real contact points are sparse.",
        "On its end, the area is smaller, but each spot presses harder, so the contact points are actually denser.",
        "The two effects cancel, so the real contact area is about the same. Friction depends only on μ and N, not on the apparent contact area.",
        "So why do F1 race cars use such wide tires? Look it up after class. Here's a hint: rubber is soft, and it doesn't fully follow this simple rule."
       ]
      },
      {
       "title": "③ Static vs. kinetic friction",
       "lines": [
        "Question three: a 10 kg box sits on the floor, and μs is 0.5. You push it horizontally with 20 N, but it doesn't move. What is the friction force on the box?",
        "A lot of students calculate it like this: μs times N, 0.5 times 98 N, equals 49 N.",
        "But that's wrong! The box isn't moving, so its acceleration is zero, and the net horizontal force must be zero. So friction exactly equals your push: 20 N.",
        "Static friction is like a clever opponent: however hard you push, it pushes back just as hard.",
        "But it has a limit: the maximum static friction is μs times N, which is 49 N.",
        "Once your push goes past that limit, the box starts to slide.",
        "Once it's sliding, friction becomes kinetic friction, equal to μk times N, and it stays about the same. Here μk is 0.3, so kinetic friction is about 29 N.",
        "Usually μk is smaller than μs. That's why a box is hardest to push at the start, and gets a little easier once it's moving.",
        "So lock in these two formulas. Static friction is less than or equal to. Its actual value comes from Newton's second law, and μs N is only its maximum.",
        "Kinetic friction is equal to μk N. Writing static friction as μs N is one of the most common traps on the AP exam."
       ]
      },
      {
       "title": "④ Incline: which box slides first?",
       "lines": [
        "Question four: a heavy box and a light box sit on a board, made of exactly the same material. As you slowly tilt the board up, which one slides off first?",
        "Intuitively, the heavy box has a bigger downhill pull, so it seems more likely to slide. But it also gets more friction. Let's work it out.",
        "First, split gravity, mg, into two parts: mg sin θ down the slope, and mg cos θ perpendicular to it.",
        "Nothing moves perpendicular to the slope, so the normal force N equals mg cos θ.",
        "Along the slope, the box stays at rest, so static friction exactly equals mg sin θ.",
        "As the angle grows, the downhill part, mg sin θ, keeps getting bigger. But the maximum static friction, μs mg cos θ, keeps shrinking, because the normal force gets smaller.",
        "At the moment they're equal, the box is right on the edge of slipping. This angle is called the critical angle.",
        "Set up the equation: mg sin θc equals μs mg cos θc. The mg cancels on both sides, leaving tan θc equals μs.",
        "The mass cancels! The critical angle depends only on μs, not on mass. So the light box and the heavy box start sliding at the same angle, at the same moment.",
        "This is also the easiest way to measure μs. Slowly raise the incline, note the angle where the object just starts to slide, and take its tangent. For example, if μs is 0.5, the critical angle is about 26.6 degrees."
       ]
      },
      {
       "title": "⑤ Calculus: the best angle to pull",
       "lines": [
        "Question five: you pull a box with a rope so it slides across the floor at constant speed. Is pulling horizontally easiest, or is it better to pull upward at an angle? And if so, which angle is best?",
        "Let the pull F make an angle θ with the horizontal, and let the coefficient of kinetic friction be μ. First, draw the free-body diagram.",
        "Vertically, N plus F sin θ equals mg, so N equals mg minus F sin θ. Pulling upward lifts the box a little, so it presses less on the floor, and friction drops too.",
        "Horizontally, at constant speed, F cos θ equals the friction, μN.",
        "Combine the two equations and solve: F equals μ mg, divided by cos θ plus μ sin θ.",
        "If the angle is too small, you get no lifting effect. If it's too large, the forward component is too small. So there must be a best angle in between.",
        "To make F as small as possible, we make the denominator as large as possible. This is where calculus comes in: take the derivative with respect to θ, and set it equal to zero.",
        "That gives tan θ* equals μ.",
        "If μ is 0.5, the best angle is about 26.6 degrees. The pull you need is about 10 percent less than pulling horizontally.",
        "Flip it around: push down at an angle, like pushing a lawn mower, and the normal force gets bigger. That takes more force.",
        "One more thing: this best pulling angle and the critical angle of the incline both equal arctan μ. Is that a coincidence? We'll leave it as a thought question."
       ]
      },
      {
       "title": "⑥ Braking distance and ABS",
       "lines": [
        "Question six: you're driving, and you speed up from 30 to 60 miles per hour, doubling your speed. In an emergency stop, how many times longer is the braking distance?",
        "We'll use the work-energy theorem, which you'll learn in the next unit. As the car brakes, friction from the road does negative work, turning all its kinetic energy into heat.",
        "In other words, μk m g times d equals one half m v squared. Once again the mass cancels, giving d equals v squared over 2 μk g.",
        "Braking distance is proportional to speed squared! Double the speed, and the braking distance isn't twice as long. It's four times as long.",
        "Now plug in numbers. On a dry road, μk is about 0.7. At 30 miles per hour, about 13 meters per second, the car stops in about 13 meters. At 60 miles per hour, it takes about 52 meters, roughly eleven car lengths.",
        "And that doesn't even include the driver's reaction time. That's why you need a bigger following distance on the freeway.",
        "So why do all modern cars have ABS, anti-lock brakes?",
        "When a wheel rolls normally, each point on the tire traces out a curve like this. Watch closely: every time this point touches the ground, its velocity is exactly zero.",
        "In other words, at that instant the contact point is at rest relative to the ground. So a rolling tire gets static friction.",
        "If you slam on the brakes too hard, the wheel locks and stops turning. The tire drags and slides along the road, so the friction becomes kinetic.",
        "Since μs is bigger than μk, a rolling tire can deliver more braking force. ABS releases and reapplies the brakes many times per second, keeping the wheels right on the edge of slipping. You stop in a shorter distance, and you can still steer."
       ]
      },
      {
       "title": "★ Challenge: the magic of a rope",
       "lines": [
        "Finally, a challenge problem. At the dock, a sailor can hold back a ship weighing hundreds of tons with just one hand. The trick is to wrap the rope around a mooring post a few times. Why do a few turns multiply the force so much?",
        "Look down at the post from above. The tension on the ship's end is huge, and on the hand's end it's small. The rope wants to slip toward the ship, and friction from the post holds it back.",
        "Take a tiny piece of the rope that spans an angle dθ. The tensions at its two ends are T, and T plus dT.",
        "Because the rope is curved, the two tensions add up to press the rope into the post. So the post pushes back with a normal force dN, roughly T times dθ.",
        "This little piece can get at most μ dN of static friction. That's exactly what balances the tension difference, dT.",
        "So dN is about T dθ, and dT equals μ T dθ.",
        "This is a separable differential equation. It's the same pattern as the motion with air resistance you just learned. Move T to the left side, and integrate both sides.",
        "We get: the natural log of T ship over T hand equals μ times θ. In other words, T ship equals T hand times e to the μ θ.",
        "Tension grows exponentially with the wrap angle! Say μ is 0.3. One turn multiplies the force by about 6.6; two turns, about 43; three turns, about 286; and five turns, more than twelve thousand.",
        "So the sailor needs only 100 N, about the effort of lifting a 10 kg bag of rice. With five turns, that holds back more than a million newtons. That's the power of exponential growth."
       ]
      },
      {
       "title": "Summary",
       "lines": [
        "Finally, let's run through today's ideas.",
        "Friction opposes relative sliding. Static friction is less than or equal to, and you find it with Newton's second law. Kinetic friction equals μk N. And friction doesn't depend on contact area.",
        "The tangent of the critical angle equals μs. The tangent of the best pulling angle equals μ. Braking distance goes as speed squared. And for a rope wrapped around a post, tension grows exponentially.",
        "Here are two questions to think about. First: squeeze a book between your hands so it stays still. If you press harder, does the friction on the book get bigger?",
        "Second: why do the best pulling angle and the incline's critical angle both equal arctan μ? Hint: combine the normal force and friction into one total contact force, and look at its direction.",
        "Figure out these two, and you've truly mastered friction. See you next time!"
       ]
      }
     ]
    }
   }
  },
  "02": {
   "num": "02",
   "slug": "02-vectors",
   "title": {
    "zh": "矢量",
    "en": "Vectors"
   },
   "problems": {
    "zh": "3î+4ĵ 的大小方向；力的分解；斜面坐标轴；三个力求 a 和 v",
    "en": "Magnitude and direction of 3î+4ĵ; resolving forces; tilted axes on an incline; three forces → a and v"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/02-vectors.mp4",
     "poster": "posters/zh/02-vectors.jpg",
     "duration": 322.2,
     "chapters": [
      {
       "t": 0.0,
       "title": "开场"
      },
      {
       "t": 42.8,
       "title": "① 单位矢量  Unit vectors"
      },
      {
       "t": 81.93,
       "title": "② 矢量分解  Components"
      },
      {
       "t": 156.73,
       "title": "③ 矢量合成  Addition"
      },
      {
       "t": 203.67,
       "title": "④ 例题  Example"
      },
      {
       "t": 297.13,
       "title": "总结"
      }
     ],
     "transcript": [
      {
       "title": "开场",
       "lines": [
        "这一集讲矢量：分解、合成，还有单位矢量。",
        "热身题：向东走 3 米，再向北走 4 米，离起点多远？",
        "先向东 3 格，再向北 4 格。一共走了 7 米，这是路程。",
        "但从起点指向终点的箭头只有 5 米，这是位移。",
        "只有大小的量叫标量；既有大小、又有方向的量叫矢量。",
        "左边这些是标量，右边这些是矢量。",
        "所以矢量相加，必须考虑方向。"
       ]
      },
      {
       "title": "① 单位矢量  Unit vectors",
       "lines": [
        "AP 物理 C 常把矢量写成单位矢量的形式。",
        "i 沿 x 方向，j 沿 y 方向，长度都是 1。",
        "A 等于 3i + 4j：沿 x 走 3 个 i，再沿 y 走 4 个 j。",
        "起点指向终点就是 A；3 和 4 叫做 A 的 x 分量和 y 分量。",
        "大小用勾股定理：根号下 3 方加 4 方，等于 5。",
        "方向用反正切：θ 等于 arctan(4/3)，约 53 度，从正 x 轴量起。"
       ]
      },
      {
       "title": "② 矢量分解  Components",
       "lines": [
        "分解：已知矢量，求它的 x、y 分量。",
        "比如 10 牛的力，与正 x 轴成 37 度。",
        "从正上方打光，F 在 x 轴上的影子就是 Fx，等于 F cos37°，8 牛。",
        "从侧面打光，y 轴上的影子就是 Fy，等于 F sin37°，6 牛。",
        "AP 常取 sin37° 约 0.6，cos37° 约 0.8。",
        "口诀：邻 cos，对 sin。挨着角的分量用 cos，对着角的用 sin。",
        "坐标轴不一定水平。斜面上，让 x′ 轴沿斜面，y′ 轴垂直斜面。",
        "抬起斜面：斜面转多少，坐标轴就转多少，重力却始终竖直向下。",
        "所以 mg 与 −y′ 轴的夹角，始终等于 θ。",
        "垂直斜面的分量挨着 θ，是 mg cosθ；沿斜面的分量对着 θ，是 mg sinθ。"
       ]
      },
      {
       "title": "③ 矢量合成  Addition",
       "lines": [
        "矢量相加，先看几何法：首尾相接。",
        "B 的尾接到 A 的头，从 A 的尾指向 B 的头，就是合矢量 R。",
        "画成平行四边形，对角线也是 R。",
        "但真正计算用分量法：x 加 x，y 加 y。",
        "x 方向：3 加 2，等于 5。",
        "y 方向：上 4 下 5，净剩向下 1。",
        "所以 R 等于 5i − 1j。",
        "大小根号 26，约 5.1；方向在正 x 轴下方 11.3 度。",
        "R 在第四象限，用反正切时要看清象限。"
       ]
      },
      {
       "title": "④ 例题  Example",
       "lines": [
        "例题：2.0 kg 的物体在光滑水平面上，这是俯视图。",
        "它受三个水平力，求加速度，和从静止开始 3 秒后的速度。",
        "第一步求合力：三个力首尾相接，顺序无所谓；起点指向终点就是合力。",
        "计算时，列一个分量表。",
        "x：3 减 5 加 4 等于 2；y：4 加 2 减 2 等于 4。",
        "合力是 (2i + 4j) N。",
        "第二步，牛顿第二定律在 x、y 方向分别成立。",
        "ax 等于 2 除以 2，得 1；ay 等于 4 除以 2，得 2。",
        "加速度是 (1.0i + 2.0j) m/s²。",
        "大小约 2.24，方向与合力相同，和正 x 轴成 63.4 度。",
        "(b)：从静止开始，v 等于 a 乘 t。",
        "每个分量乘以 3，得到 (3.0i + 6.0j) m/s。",
        "追问：要保持静止，还要加什么力？",
        "合力必须为零，所以 F4 等于负的合力：(−2i − 4j) N，等大反向。",
        "四个力首尾相接，正好回到起点，合力为零。"
       ]
      },
      {
       "title": "总结",
       "lines": [
        "总结：大小用勾股定理，方向用反正切，注意象限。",
        "分解：邻 cos，对 sin；斜面上，坐标轴跟着斜面转。",
        "合成：分量分别相加；牛顿第二定律每个方向分别成立。",
        "下一集：点积与功。"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/02-vectors.mp4",
     "poster": "posters/en/02-vectors.jpg",
     "duration": 352.8,
     "chapters": [
      {
       "t": 0.0,
       "title": "Intro"
      },
      {
       "t": 45.23,
       "title": "① Unit Vectors"
      },
      {
       "t": 87.23,
       "title": "② Components"
      },
      {
       "t": 167.63,
       "title": "③ Vector Addition"
      },
      {
       "t": 217.77,
       "title": "④ Example"
      },
      {
       "t": 326.47,
       "title": "Summary"
      }
     ],
     "transcript": [
      {
       "title": "Intro",
       "lines": [
        "This episode is about vectors: components, addition, and unit vectors.",
        "Warm-up: walk 3 meters east, then 4 meters north. How far are you from the start?",
        "3 squares east, then 4 north: 7 meters walked in all. That's the distance.",
        "But the arrow from start to end is only 5 meters long. That's the displacement.",
        "A quantity with only a magnitude is a scalar. One with both a magnitude and a direction is a vector.",
        "Scalars on the left, vectors on the right.",
        "So when you add vectors, direction matters."
       ]
      },
      {
       "title": "① Unit Vectors",
       "lines": [
        "AP Physics C often writes vectors using unit vectors.",
        "î points along x, ĵ points along y, and both have length 1.",
        "Vector A equals 3î + 4ĵ: three steps of î, then four steps of ĵ.",
        "The arrow from start to end is vector A. The 3 and the 4 are its x and y components.",
        "The Pythagorean theorem gives the magnitude: the square root of 3 squared plus 4 squared, or 5.",
        "For the direction, θ equals arctan(4/3): about 53 degrees from the +x axis."
       ]
      },
      {
       "title": "② Components",
       "lines": [
        "Resolving a vector means finding its x and y components.",
        "Say we have a 10 N force at 37 degrees from the +x axis.",
        "Shine a light straight down, and F's shadow on the x axis is Fx: F cos37°, or 8 N.",
        "Shine it from the side, and the shadow on the y axis is Fy: F sin37°, or 6 N.",
        "AP shortcut: sin37° is about 0.6, and cos37° about 0.8.",
        "Here's the rule: adjacent gets cos, opposite gets sin. The component next to the angle uses cos; the one across from it uses sin.",
        "Axes don't have to be horizontal. On an incline, put the x′ axis along the slope and the y′ axis perpendicular to it.",
        "Now tilt the incline up. The axes rotate by the same angle, but gravity still points straight down.",
        "So the angle between mg and the −y′ axis is always θ.",
        "The perpendicular component is adjacent to θ, so it's mg cosθ. The component along the slope is opposite θ, so it's mg sinθ."
       ]
      },
      {
       "title": "③ Vector Addition",
       "lines": [
        "To add vectors, start with the geometric method: tip-to-tail.",
        "Put the tail of vector B at the tip of vector A. The arrow from A's tail to B's tip is the resultant, vector R.",
        "Complete the parallelogram, and its diagonal is also R.",
        "For real calculations, use components: add x to x, and y to y.",
        "In x: 3 plus 2 equals 5.",
        "In y: up 4 and down 5, so the net is 1 down.",
        "So vector R equals 5î − 1ĵ.",
        "The magnitude is the square root of 26, about 5.1. The direction is 11.3 degrees below the +x axis.",
        "R is in the fourth quadrant, so always check the quadrant."
       ]
      },
      {
       "title": "④ Example",
       "lines": [
        "Example: a 2.0 kg object on a frictionless horizontal surface, seen from above.",
        "Three horizontal forces act on it. Find its acceleration, and its velocity 3 seconds after starting from rest.",
        "Step one: find the net force. Place the three forces tip-to-tail, in any order. The arrow from start to end is the net force.",
        "To calculate it, make a component table.",
        "In x: 3 minus 5 plus 4 equals 2. In y: 4 plus 2 minus 2 equals 4.",
        "So the net force is (2î + 4ĵ) N.",
        "Step two: Newton's second law holds separately in x and in y.",
        "ax equals 2 divided by 2, which is 1. ay equals 4 divided by 2, which is 2.",
        "The acceleration is (1.0î + 2.0ĵ) m/s².",
        "Its magnitude is about 2.24, along the net force: 63.4 degrees from the +x axis.",
        "Part (b): starting from rest, v equals a times t.",
        "Multiply each component by 3 to get (3.0î + 6.0ĵ) m/s.",
        "Follow-up: what extra force would keep it at rest?",
        "The net force must be zero, so vector F4 is minus the net force: (−2î − 4ĵ) N. Same size, opposite direction.",
        "Tip-to-tail, the four forces end right back at the start, so the net force is zero."
       ]
      },
      {
       "title": "Summary",
       "lines": [
        "To sum up: magnitude from the Pythagorean theorem, direction from the inverse tangent, and watch the quadrant.",
        "Components: adjacent gets cos, opposite gets sin. On an incline, the axes tilt with the slope.",
        "Addition: add the components separately. And Newton's second law holds in each direction separately.",
        "Next time: the dot product and work."
       ]
      }
     ]
    }
   }
  },
  "03": {
   "num": "03",
   "slug": "03-dot-product-and-work",
   "title": {
    "zh": "点积与功",
    "en": "Dot Product and Work"
   },
   "problems": {
    "zh": "斜拉箱子各力做功与末速度；μ 随位置变化（积分）；摩擦力做正功的例子",
    "en": "Work done by each force on a dragged crate; μ that varies with position (integral); when friction does positive work"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/03-dot-product-and-work.mp4",
     "poster": "posters/zh/03-dot-product-and-work.jpg",
     "duration": 326.4,
     "chapters": [
      {
       "t": 0.0,
       "title": "开场"
      },
      {
       "t": 39.77,
       "title": "① 点积 Dot Product"
      },
      {
       "t": 110.13,
       "title": "② 功 Work"
      },
      {
       "t": 142.5,
       "title": "③ 例题：每个力做多少功？"
      },
      {
       "t": 220.37,
       "title": "④ 变力做功：积分"
      },
      {
       "t": 287.67,
       "title": "⑤ 回到开头的问题"
      }
     ],
     "transcript": [
      {
       "title": "开场",
       "lines": [
        "这一集，我们讲功与点积。",
        "小人斜着拉行李箱：拉力斜向上，箱子却水平向右走。",
        "把 F 分解：水平分量 F cosθ 沿运动方向，真正在出力；",
        "竖直分量 F sinθ 与运动垂直，不出力。",
        "把沿运动方向的这部分挑出来，靠的就是点积。",
        "先留一个问题：摩擦力做的功，一定是负的吗？",
        "答案，留到最后揭晓。"
       ]
      },
      {
       "title": "① 点积 Dot Product",
       "lines": [
        "A 点乘 B，定义为 A 的大小乘 B 的大小，再乘夹角 θ 的余弦。",
        "几何上：从 A 的尖端向 B 作垂线，得到 A 在 B 方向上的投影。点积，就是投影长度乘以 B 的长度。",
        "让 A 转起来：夹角小于 90 度，投影朝前，点积为正；",
        "正好 90 度，投影缩成一个点，点积为零；",
        "超过 90 度，投影落到反方向，点积变成负的。",
        "实际计算更常用分量公式：写成 i 和 j 的分量，乘开得到四项。",
        "i·i 和 j·j 都等于 1；i·j 互相垂直，等于 0。交叉项全部消失。",
        "于是，A·B = AxBx + AyBy。",
        "例如 (3i + 4j)·(2i + 6j)，等于 3 乘 2 加 4 乘 6，得 30。",
        "结果为正，说明夹角小于 90 度。"
       ]
      },
      {
       "title": "② 功 Work",
       "lines": [
        "功的定义：W 等于力点乘位移，也就是 F d cosθ。",
        "单位是焦耳，就是牛·米。",
        "力沿着运动方向，θ 等于 0，功为正；",
        "力与运动方向垂直，比如法向力和重力，cos90° 等于 0，不做功；",
        "力与运动方向相反，比如动摩擦力，功为负。",
        "所以，功的正负只看力和位移的夹角。"
       ]
      },
      {
       "title": "③ 例题：每个力做多少功？",
       "lines": [
        "例题：10 千克的箱子从静止开始，受 50 牛、斜向上 37 度的拉力，被拉动 5 米，μk 等于 0.2。求各力做的功和末速度。",
        "先画受力图：拉力 F，重力 mg，法向力 N，动摩擦力 f；位移 d 向右。",
        "拉力的功：F d cos37°，等于 200 焦。",
        "注意，N 不等于 mg：拉力向上提了 30 牛，所以 N 等于 98 减 30，68 牛。",
        "摩擦力 f 等于 μk N，13.6 牛；它与位移反向，做功负 68 焦。",
        "重力和法向力垂直于位移，不做功。",
        "画成柱状图：正 200，负 68，还有两个零。",
        "加起来，净功是 132 焦。",
        "由功能定理，净功等于动能的变化。箱子从静止出发，末动能就是 132 焦。",
        "二分之一 m v 平方等于 132，解得 v 约为 5.1 米每秒。"
       ]
      },
      {
       "title": "④ 变力做功：积分",
       "lines": [
        "如果力随位置变化，就把位移切成许多小段，每段的功是 F dx。",
        "全部加起来就是积分，也就是 F–x 图 下的面积。",
        "例题 2：2 千克的物块以每秒 6 米的速度，滑上越来越粗糙的路面，μ = 0.10 + 0.050x。它能滑多远？",
        "摩擦力 f 等于 μ m g，也就是 1.96 加 0.98 x，是一条斜直线。",
        "初动能是二分之一 m v 零平方，36 焦。",
        "物块滑动时，摩擦力做负功，大小就是图下的面积；面积长一点，动能就少一点。",
        "面积达到 36 焦，动能耗尽，物块停下。",
        "列方程：36 焦等于 f 从 0 到 d 的积分，也就是 1.96 d 加 0.49 d 平方。",
        "用求根公式取正根，d 约等于 6.8 米。"
       ]
      },
      {
       "title": "⑤ 回到开头的问题",
       "lines": [
        "回到开头的问题：摩擦力做的功，一定是负的吗？",
        "不一定！",
        "卡车加速时，车厢里的箱子跟着加速；推它加速的，正是车厢底板向前的静摩擦力。",
        "力向前，位移也向前，所以静摩擦力做正功。",
        "记住：摩擦力阻碍的是相对滑动，不是运动本身。",
        "最后，记住这四个公式。",
        "我们下期再见！"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/03-dot-product-and-work.mp4",
     "poster": "posters/en/03-dot-product-and-work.jpg",
     "duration": 358.4,
     "chapters": [
      {
       "t": 0.0,
       "title": "Intro"
      },
      {
       "t": 41.73,
       "title": "① Dot Product"
      },
      {
       "t": 119.63,
       "title": "② Work"
      },
      {
       "t": 154.33,
       "title": "③ Example: Work by Each Force"
      },
      {
       "t": 243.47,
       "title": "④ Variable Forces: Integrals"
      },
      {
       "t": 321.57,
       "title": "⑤ Back to Our Question"
      }
     ],
     "transcript": [
      {
       "title": "Intro",
       "lines": [
        "In this episode: the dot product and work.",
        "Someone pulls a suitcase at an angle. The pull points up and to the right, but the suitcase moves straight right.",
        "Break F into components. The horizontal part, F cosθ, is along the motion: it does the work;",
        "the vertical part, F sinθ, is perpendicular to it: no work.",
        "Picking out the part along the motion is what the dot product does.",
        "First, a question: is the work done by friction always negative?",
        "We'll reveal the answer at the end."
       ]
      },
      {
       "title": "① Dot Product",
       "lines": [
        "Vector A dot vector B equals the magnitude of A, times the magnitude of B, times cos θ.",
        "Geometrically, drop a perpendicular from A's tip onto B to get A's projection along B. The dot product is the projection's length times the length of B.",
        "Now rotate A. Below 90 degrees, the projection points forward, and the dot product is positive;",
        "at exactly 90 degrees, the projection shrinks to a point, and the dot product is zero;",
        "past 90 degrees, the projection points backward, and the dot product turns negative.",
        "In practice, use components: write each vector in î and ĵ, and multiply out into four terms.",
        "î·î and ĵ·ĵ both equal 1. î·ĵ is 0, because they're perpendicular. So the cross terms drop out.",
        "So A·B = AxBx + AyBy.",
        "For example, (3î + 4ĵ)·(2î + 6ĵ) is 3 times 2 plus 4 times 6, or 30.",
        "It's positive, so the angle is less than 90 degrees."
       ]
      },
      {
       "title": "② Work",
       "lines": [
        "Work is W equals F dot d, the force dotted with the displacement: F d cosθ.",
        "The unit is the joule, which is one newton·meter.",
        "If the force is along the motion, θ is 0, and the work is positive;",
        "if it's perpendicular, like the normal force or gravity, cos90° is 0: no work;",
        "and if it's opposite the motion, like kinetic friction, the work is negative.",
        "So the sign of the work depends only on the angle between force and displacement."
       ]
      },
      {
       "title": "③ Example: Work by Each Force",
       "lines": [
        "Example: a 10 kg box starts from rest. A 50 N pull at 37 degrees above horizontal moves it 5 meters; μk is 0.2. Find the work done by each force, and the final speed.",
        "First, the free-body diagram: pull F, gravity mg, normal force N, and kinetic friction f. The displacement d points right.",
        "Work done by the pull: F d cos37°, which is 200 J.",
        "Careful: N is not mg. The pull lifts up by 30 newtons, so N is 98 minus 30: 68 newtons.",
        "Friction is μk N, or 13.6 N. It opposes the displacement, so its work is −68 J.",
        "Gravity and the normal force are perpendicular to d, so they do no work.",
        "As a bar chart: plus 200, minus 68, and two zeros.",
        "Add them up: the net work is 132 J.",
        "By the work–energy theorem, the net work equals the change in kinetic energy. Starting from rest, the box ends with 132 J of kinetic energy.",
        "½mv² equals 132, so v is about 5.1 m/s."
       ]
      },
      {
       "title": "④ Variable Forces: Integrals",
       "lines": [
        "If the force varies with position, chop the displacement into small pieces. The work on each piece is F dx.",
        "Add them all up and you get an integral: the area under the F–x graph.",
        "Example 2: a 2.0 kg block slides at 6.0 m/s onto an increasingly rough floor. Here μ = 0.10 + 0.050x. How far does it slide?",
        "Friction is μ m g: 1.96 plus 0.98 x, a sloped line.",
        "The initial kinetic energy, one half m v naught squared, is 36 J.",
        "As the block slides, friction's negative work equals the area under the graph. More area, less kinetic energy.",
        "When the area reaches 36 J, the kinetic energy is gone and the block stops.",
        "The equation: 36 joules equals the integral of f from 0 to d, or 1.96 d plus 0.49 d squared.",
        "The positive root of the quadratic gives d of about 6.8 m."
       ]
      },
      {
       "title": "⑤ Back to Our Question",
       "lines": [
        "Back to our question: is the work done by friction always negative?",
        "Not necessarily!",
        "When a truck speeds up, the box in its bed speeds up too. What pushes the box forward is static friction from the truck bed.",
        "Force and displacement both point forward, so static friction does positive work.",
        "Remember: friction opposes relative sliding, not motion itself.",
        "Finally, remember these four formulas.",
        "See you next time!"
       ]
      }
     ]
    }
   }
  },
  "04": {
   "num": "04",
   "slug": "04-friction-on-an-incline",
   "title": {
    "zh": "斜面上的摩擦",
    "en": "Friction on an Incline"
   },
   "problems": {
    "zh": "加速下滑；冲上去再滑回来（v–t 拐点）；推住物块 F 的范围",
    "en": "Sliding down; sliding up and back (kink in v–t); the range of F that holds a block at rest"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/04-friction-on-an-incline.mp4",
     "poster": "posters/zh/04-friction-on-an-incline.jpg",
     "duration": 349.8,
     "chapters": [
      {
       "t": 0.0,
       "title": "① 受力图五步法"
      },
      {
       "t": 51.33,
       "title": "② 例 1：加速下滑"
      },
      {
       "t": 110.33,
       "title": "③ 例 2：冲上去，再滑回来"
      },
      {
       "t": 223.47,
       "title": "④ 例 3：推住它，F 取多大？"
      },
      {
       "t": 309.0,
       "title": "总结"
      }
     ],
     "transcript": [
      {
       "title": "① 受力图五步法",
       "lines": [
        "这一集做三道斜面摩擦的典型题。先记住画受力图的五步法。",
        "第一步，选研究对象：斜面上的这个物块。",
        "第二步，画重力 mg，竖直向下。",
        "第三步，画接触力：法向力 N 垂直斜面，摩擦力 f 平行斜面。",
        "f 朝哪边，要看物块的运动或运动趋势，这是今天的关键。",
        "第四步，沿斜面建坐标轴，把重力分解成 mg sinθ 和 mg cosθ。",
        "第五步，每个方向分别列牛顿第二定律。",
        "本集统一数据：质量 2.0 千克，倾角 30 度，μs 等于 0.30，μk 等于 0.20。"
       ]
      },
      {
       "title": "② 例 1：加速下滑",
       "lines": [
        "例题 1：物块沿斜面加速下滑，求它的加速度。",
        "物块向下滑，动摩擦力就沿斜面向上，和运动方向相反。",
        "再补上重力和法向力，并把重力沿斜面分解。",
        "垂直斜面方向没有加速度，所以 N 等于 mg cosθ，约 17.0 牛。",
        "动摩擦力 f 等于 μk N，约 3.39 牛。",
        "沿斜面方向，取向下为正：mg sinθ 减去 μk mg cosθ，等于 m a。",
        "每一项都有 m，全部约掉！",
        "得到 a 等于 g 乘以括号 sinθ 减 μk cosθ，约 3.20 m/s²。",
        "加速度和质量无关：轻的重的，滑得一样快。"
       ]
      },
      {
       "title": "③ 例 2：冲上去，再滑回来",
       "lines": [
        "例题 2，本集重点：物块以 8.0 米每秒的速度沿斜面向上冲。能滑多远？会滑回来吗？回到起点时速度多大？",
        "上滑时，动摩擦力沿斜面向下，和重力的下滑分量同向。",
        "两个力一起让它减速：a1 等于 g 乘以括号 sinθ 加 μk cosθ，约 6.60 m/s²。",
        "滑行距离 s 等于 v0 平方除以 2 a1，约 4.85 米，用时约 1.21 秒。",
        "到了最高点，速度为零。它会停住吗？",
        "比较：下滑分量 mg sinθ 是 9.8 牛，最大静摩擦 μs mg cosθ 只有约 5.09 牛。",
        "拉不住，所以会滑回来。等价的判据是：tanθ 约 0.577，大于 μs。",
        "往下滑时，运动方向反了，动摩擦力也跟着翻转，变成沿斜面向上。",
        "加速度就是例题 1 的结果，a2 约 3.20 m/s²，比上滑时小。",
        "回到起点时，v 等于根号下 2 a2 s，约 5.57 米每秒，用时约 1.74 秒。",
        "比出发时的 8.0 米每秒小：一部分机械能被摩擦变成了热。",
        "看 v–t 图，取沿斜面向上为正。",
        "上滑段斜率负 6.60，下滑段负 3.20：两段都为负，加速度始终沿斜面向下。",
        "拐点处摩擦力翻转，所以下滑段更平缓，用时也更长。"
       ]
      },
      {
       "title": "④ 例 3：推住它，F 取多大？",
       "lines": [
        "例题 3：用沿斜面向上的力 F 推住物块，让它静止。F 可以取哪些值？",
        "垂直方向同前。只看沿斜面的三个力：推力 F、下滑分量 mg sinθ 和静摩擦力。",
        "下滑分量是 9.8 牛；最大静摩擦是 μs mg cosθ，约 5.09 牛。",
        "F 很小时，静摩擦用到最大也拉不住，物块会滑下去。",
        "F 增大到 4.71 牛，刚好拉住：有下滑趋势，静摩擦向上，并且达到最大。",
        "F 继续增大，需要的静摩擦越来越小；F 等于 9.8 牛时，摩擦力为零。",
        "F 再大，就有了上滑趋势，静摩擦翻转，变成沿斜面向下。",
        "到 14.9 牛时，向下的静摩擦也达到最大。",
        "再大，物块就被推上去了。",
        "所以 F 的范围是 4.71 牛到 14.9 牛。",
        "顺带一提：匀速推上去时是动摩擦、方向向下，F 等于 mg 乘以括号 sinθ 加 μk cosθ，约 13.2 牛。"
       ]
      },
      {
       "title": "总结",
       "lines": [
        "最后总结。",
        "下滑时，a 等于 g 乘以括号 sinθ 减 μk cosθ；上滑减速时，括号里变成加号。",
        "会不会滑回来，比较 tanθ 和 μs。",
        "推住静止：F 在 mg 乘以括号 sinθ 减 μs cosθ，到 mg 乘以括号 sinθ 加 μs cosθ 之间。",
        "记住一句话：动摩擦的方向和相对运动相反；静摩擦的方向，由运动趋势决定。",
        "我们下一集见！"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/04-friction-on-an-incline.mp4",
     "poster": "posters/en/04-friction-on-an-incline.jpg",
     "duration": 358.5,
     "chapters": [
      {
       "t": 0.0,
       "title": "① Free-Body Diagram in Five Steps"
      },
      {
       "t": 54.37,
       "title": "② Example 1: Sliding Down"
      },
      {
       "t": 117.93,
       "title": "③ Example 2: Up the Incline and Back"
      },
      {
       "t": 235.37,
       "title": "④ Example 3: How Hard to Push to Hold It?"
      },
      {
       "t": 322.23,
       "title": "Summary"
      }
     ],
     "transcript": [
      {
       "title": "① Free-Body Diagram in Five Steps",
       "lines": [
        "Three classic incline friction problems today, starting with the five steps for a free-body diagram.",
        "Step one: pick the object, this block on the incline.",
        "Step two: draw gravity, mg, straight down.",
        "Step three: contact forces, with normal force N perpendicular to the incline and friction f parallel to it.",
        "Which way f points depends on how the block moves, or tends to move, and that's today's key idea.",
        "Step four: tilt the axes along the incline, and split gravity into mg sin θ and mg cos θ.",
        "Step five: write Newton's second law along each axis.",
        "Our data: mass 2.0 kilograms, angle 30 degrees, μs 0.30, and μk 0.20."
       ]
      },
      {
       "title": "② Example 1: Sliding Down",
       "lines": [
        "Example 1: find the acceleration of the block sliding down the incline.",
        "The block slides down, so kinetic friction points up the incline, opposite the motion.",
        "Add gravity and the normal force, then resolve gravity along the incline.",
        "No acceleration perpendicular to the incline, so N equals mg cos θ, about 17.0 N.",
        "Kinetic friction f equals μk N, about 3.39 N.",
        "Along the incline, with downhill positive: mg sin θ minus μk mg cos θ equals m a.",
        "Every term has an m, so they all cancel!",
        "So the acceleration equals g times the quantity sin θ minus μk cos θ, about 3.20 m/s².",
        "It doesn't depend on mass: light or heavy, they slide together."
       ]
      },
      {
       "title": "③ Example 2: Up the Incline and Back",
       "lines": [
        "Example 2, the key problem: the block is launched up the incline at 8.0 m/s. How far does it go, will it slide back, and how fast is it back at the start?",
        "On the way up, kinetic friction points down the incline, along with gravity's downhill component.",
        "Together they slow it down: a1 equals g times the quantity sin θ plus μk cos θ, about 6.60 m/s².",
        "It goes s equals v0 squared over 2 a1, about 4.85 m, in about 1.21 s.",
        "At the top, its velocity is zero, but will it stay there?",
        "Compare: mg sin θ is 9.8 N, but maximum static friction, μs mg cos θ, is only about 5.09 N.",
        "Friction can't hold it, so it slides back. Equivalently, tan θ, about 0.577, is greater than μs.",
        "On the way down, the motion reverses, so kinetic friction flips to point up the incline.",
        "That's Example 1's result: a2 is about 3.20 m/s², smaller than going up.",
        "Back at the start, v equals root 2 a2 s, about 5.57 m/s, after about 1.74 s.",
        "That's less than 8.0 m/s: friction turned some mechanical energy into heat.",
        "Now the v–t graph, with up the incline positive.",
        "The slopes are negative 6.60 going up and negative 3.20 going down. Both negative: the acceleration always points down the incline.",
        "Friction flips at the turning point, so the way down is gentler, and it takes longer."
       ]
      },
      {
       "title": "④ Example 3: How Hard to Push to Hold It?",
       "lines": [
        "Example 3: what range of forces F, pushing up the incline, can hold the block at rest?",
        "Perpendicular, nothing changes. Along the incline we have the push F, the downhill component mg sin θ, and static friction.",
        "The downhill component is 9.8 N, and maximum static friction, μs mg cos θ, is about 5.09 N.",
        "When F is small, even maximum static friction can't hold the block, so it slides down.",
        "At 4.71 N, it just holds: it tends to slide down, so static friction points up, at its maximum.",
        "As F grows, less static friction is needed, and at 9.8 N it's zero.",
        "Push harder, and the block tends to slide up, so static friction flips to point down the incline.",
        "At 14.9 N, the downward static friction reaches its maximum too.",
        "Any more, and the block gets pushed up the incline.",
        "So F must be between 4.71 N and 14.9 N.",
        "By the way, pushing it up at constant speed means kinetic friction, pointing down. Then F equals mg times the quantity sin θ plus μk cos θ, about 13.2 N."
       ]
      },
      {
       "title": "Summary",
       "lines": [
        "Let's sum up.",
        "Sliding down, a equals g times the quantity sin θ minus μk cos θ, and sliding up, the minus becomes a plus.",
        "To see whether it slides back, compare tan θ with μs.",
        "To hold it at rest, F runs from mg times the quantity sin θ minus μs cos θ, up to the same thing with a plus.",
        "Remember: kinetic friction opposes the relative motion, and static friction opposes the tendency to move.",
        "See you in the next episode!"
       ]
      }
     ]
    }
   }
  },
  "05": {
   "num": "05",
   "slug": "05-stacked-blocks",
   "title": {
    "zh": "叠放木块",
    "en": "Stacked Blocks"
   },
   "problems": {
    "zh": "一起动吗；最大拉力；打滑后各自加速度；改拉上面那块",
    "en": "Do they move together? Maximum pull; accelerations after slipping; pulling the top block instead"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/05-stacked-blocks.mp4",
     "poster": "posters/zh/05-stacked-blocks.jpg",
     "duration": 318.0,
     "chapters": [
      {
       "t": 0.0,
       "title": "开场"
      },
      {
       "t": 59.17,
       "title": "① 一起动吗？"
      },
      {
       "t": 118.27,
       "title": "② 最大拉力"
      },
      {
       "t": 180.7,
       "title": "③ 打滑以后"
      },
      {
       "t": 257.77,
       "title": "④ 变式：改拉上面的 A"
      }
     ],
     "transcript": [
      {
       "title": "开场",
       "lines": [
        "这一集做一道经典题：叠放木块。",
        "B 放在光滑地面上，A 叠在 B 上。水平力 F 只拉下面的 B。",
        "A 并没有被直接拉，它为什么也会跟着动？",
        "把 A、B 上下拉开，分别画受力图，这叫隔离法。",
        "先看 A：竖直方向，重力和支持力平衡。",
        "水平方向，A 只接触 B。能让它向前加速的，只有 B 对 A 的静摩擦力。",
        "由牛顿第三定律，A 对 B 的摩擦力等大、向后。",
        "B 还受重力、地面支持力、A 的压力，和拉力 F。",
        "这对摩擦力等大、反向，作用在两个物体上，是作用力与反作用力。"
       ]
      },
      {
       "title": "① 一起动吗？",
       "lines": [
        "例题 1：F 等于 12 牛。A、B 会一起动吗？摩擦力多大？",
        "静摩擦多大事先不知道，先假设它们一起动。",
        "看成整体，这对摩擦力是内力，互相抵消。加速度是 2.0 米每二次方秒。",
        "再单独看 A：它只受摩擦力，f 等于 m₁a，4.0 牛。",
        "够不够？最大静摩擦是 μs m₁g，7.84 牛。注意，正压力只算 A 的重力。",
        "需要 4.0 牛，最多 7.84 牛，够用！假设成立：一起动。",
        "记住套路：先假设一起动，求需要的静摩擦，再和 μs N 比较。"
       ]
      },
      {
       "title": "② 最大拉力",
       "lines": [
        "例题 2：F 最大多少，A、B 还能一起动？",
        "关键看 A：它只靠摩擦力加速，而摩擦力最多 μs m₁g。",
        "所以 A 的加速度最大是 μs g，3.92 米每二次方秒。",
        "整体的加速度也不能超过它，所以 F 最大约 23.5 牛。",
        "把 A 受的摩擦力随 F 的变化画出来。",
        "一起动时，f 是 F 的三分之一，一条过原点的直线。",
        "例题 1 的 12 牛，对应 4.0 牛。",
        "F 到 23.5 牛，f 碰到上限 7.84 牛。",
        "再大，A 就相对 B 向后滑，摩擦力跳降为动摩擦 5.88 牛，之后不变。",
        "眼熟吗？和第 1 集推箱子的 f–F 图，是同一个形状。"
       ]
      },
      {
       "title": "③ 打滑以后",
       "lines": [
        "例题 3：F 加到 30 牛，A、B 的加速度各是多少？",
        "30 牛超过了 23.5 牛，已经打滑。摩擦力变成 μk m₁g，5.88 牛。",
        "A 相对 B 向后滑，所以动摩擦对 A 仍然向前。a₁ 等于 μk g，2.94 米每二次方秒。",
        "对 B：F 向前，摩擦力向后，a₂ 约 6.03 米每二次方秒。",
        "B 更快，A 被一点点甩到后面。",
        "最后从 B 的后端掉下去。",
        "想一想：打滑时，摩擦力对 A 做正功还是负功？",
        "开始时 A 在 B 的前端，快掉下时到了后端：相对 B，A 向后滑。",
        "但相对地面，A 一直向前走。摩擦力向前，位移也向前。",
        "所以摩擦力对 A 做正功！它阻碍的是相对滑动，不一定阻碍运动。"
       ]
      },
      {
       "title": "④ 变式：改拉上面的 A",
       "lines": [
        "变式：如果改成拉上面的 A 呢？",
        "左边拉 B，被带动的是 A，F 最大约 23.5 牛。",
        "拉 A 时，被带动的变成 B。它只靠摩擦力加速，最大还是 7.84 牛。",
        "B 更重，最大加速度只有 1.96；F 最大约 11.8 牛，只有一半。",
        "让 F 慢慢增大：拉 A 的这组先打滑。",
        "拉 B 的这组，要到 23.5 牛才打滑。",
        "总结三点。一，被带动的那块只靠摩擦力加速，它决定最大共同加速度。",
        "二，先假设一起动，再检查 f 是否小于等于 μs N。",
        "三，打滑后用 μk N，两块分别列方程。",
        "我们下集见！"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/05-stacked-blocks.mp4",
     "poster": "posters/en/05-stacked-blocks.jpg",
     "duration": 338.1,
     "chapters": [
      {
       "t": 0.0,
       "title": "Intro"
      },
      {
       "t": 58.73,
       "title": "① Do They Move Together?"
      },
      {
       "t": 122.73,
       "title": "② Maximum Pull"
      },
      {
       "t": 188.23,
       "title": "③ After Slipping"
      },
      {
       "t": 269.17,
       "title": "④ Variation: Pull A Instead"
      }
     ],
     "transcript": [
      {
       "title": "Intro",
       "lines": [
        "This episode is a classic: stacked blocks.",
        "Block B sits on a frictionless floor, with block A on top. A horizontal force F pulls only on B.",
        "Nothing pulls on A directly, so why does it move along with B?",
        "Separate A and B, and draw a free-body diagram for each one.",
        "First A: vertically, gravity and the normal force balance.",
        "Horizontally, A touches only B. The only thing that can speed it up is static friction from B on A.",
        "By Newton's third law, the friction from A on B is equal in size and points backward.",
        "B also feels gravity, the normal force from the floor, A pressing down, and the pull F.",
        "These two friction forces are equal, opposite, and act on different objects: an action–reaction pair."
       ]
      },
      {
       "title": "① Do They Move Together?",
       "lines": [
        "Example 1: F equals 12 N. Do A and B move together, and how big is the friction?",
        "We don't know the static friction yet, so first assume they move together.",
        "As one system, this friction pair is internal and cancels out. The acceleration is 2.0 m/s².",
        "Now look at A alone. Friction is the only horizontal force, so f equals m₁a, which is 4.0 N.",
        "Is that enough? Maximum static friction is μs m₁g, 7.84 N. Note that the normal force here is only A's weight.",
        "We need 4.0 N, and up to 7.84 N is available. The assumption holds: they move together.",
        "Remember the recipe: assume they move together, find the static friction needed, then compare it with μs N."
       ]
      },
      {
       "title": "② Maximum Pull",
       "lines": [
        "Example 2: what's the largest F that still lets A and B move together?",
        "The key is A: only friction speeds it up, and friction is at most μs m₁g.",
        "So A's maximum acceleration is μs g, 3.92 m/s².",
        "The whole system can't accelerate faster than that, so F max is about 23.5 N.",
        "Let's graph the friction on A as F increases.",
        "While they move together, f is one third of F: a straight line through the origin.",
        "Example 1's 12 N gives 4.0 N.",
        "At 23.5 N, f hits its limit of 7.84 N.",
        "Beyond that, A slips backward relative to B. Friction drops to kinetic, 5.88 N, and stays there.",
        "Look familiar? It's the same shape as the f–F graph for pushing a box in Episode 1."
       ]
      },
      {
       "title": "③ After Slipping",
       "lines": [
        "Example 3: F is raised to 30 N. What are the accelerations of A and B?",
        "30 N is more than 23.5 N, so A slips. Friction becomes μk m₁g, 5.88 N.",
        "A slides backward relative to B, so kinetic friction on A still points forward. a₁ equals μk g, 2.94 m/s².",
        "For B, F points forward and friction points backward, so a₂ is about 6.03 m/s².",
        "B speeds up faster, so A gradually falls behind.",
        "Finally, it falls off the back of B.",
        "Think about it: while A slips, does friction do positive or negative work on A?",
        "At the start, A is at the front of B; just before it falls, it's at the back. Relative to B, A slides backward.",
        "But relative to the ground, A keeps moving forward. Friction points forward, and so does the displacement.",
        "So friction does positive work on A! It opposes relative sliding, not necessarily motion."
       ]
      },
      {
       "title": "④ Variation: Pull A Instead",
       "lines": [
        "A variation: what if we pull the top block, A, instead?",
        "On the left, we pull B, so A is dragged along, and F max is about 23.5 N.",
        "Pull A, and now B is the one dragged along. Only friction accelerates it, and that's still at most 7.84 N.",
        "B is heavier, so its maximum acceleration is only 1.96 m/s². F max is about 11.8 N, just half.",
        "Now slowly increase F: the pull-A setup slips first.",
        "The pull-B setup doesn't slip until 23.5 N.",
        "Three takeaways. One: the block being dragged along is accelerated only by friction, so it sets the maximum shared acceleration.",
        "Two: assume they move together, then check whether f is at most μs N.",
        "Three: once they slip, use μk N, and write separate equations for each block.",
        "See you in the next episode!"
       ]
      }
     ]
    }
   }
  },
  "06": {
   "num": "06",
   "slug": "06-connected-bodies-and-pulleys",
   "title": {
    "zh": "滑轮连接体",
    "en": "Connected Bodies and Pulleys"
   },
   "problems": {
    "zh": "先判断动不动；整体法求 a、隔离法求 T；静摩擦不是 μsN",
    "en": "Check whether it moves first; system for a, isolate for T; static friction is not always μsN"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/06-connected-bodies-and-pulleys.mp4",
     "poster": "posters/zh/06-connected-bodies-and-pulleys.jpg",
     "duration": 325.5,
     "chapters": [
      {
       "t": 0.0,
       "title": "开场"
      },
      {
       "t": 48.87,
       "title": "① 第一步：它会动吗？"
      },
      {
       "t": 101.2,
       "title": "② 求加速度 a 和张力 T"
      },
      {
       "t": 207.03,
       "title": "③ 例 2：B 换成 1.0 kg"
      },
      {
       "t": 288.5,
       "title": "小结：连接体四步走"
      }
     ],
     "transcript": [
      {
       "title": "开场",
       "lines": [
        "这一集，我们来做 AP 力学里的一类经典题：滑轮连接体。",
        "桌面上放着物块 A。一根轻绳跨过桌边的光滑滑轮，下面挂着物块 B。",
        "A 的质量是 3 千克，与桌面间的 μs 等于 0.5，μk 等于 0.3；B 的质量是 2 千克。",
        "解这类题，先记住两条事实。第一：同一根轻绳上，张力 T 处处相等。滑轮只改变绳子的方向，不改变张力的大小。",
        "第二：绳子不会伸长。A 向右移动多少，B 就向下移动多少，所以两者的加速度大小相同。"
       ]
      },
      {
       "title": "① 第一步：它会动吗？",
       "lines": [
        "第一步，先别急着列方程，问一问：从静止释放，A 会被拉动吗？",
        "想拉动 A 的，是 B 的重力 m₂g：2 乘以 9.8，等于 19.6 牛。",
        "想拦住 A 的，是桌面的静摩擦力。它最大只能达到 μs 乘以 m₁g，也就是 14.7 牛。",
        "像拔河一样比一比：静摩擦力最多只能涨到 14.7 牛。",
        "19.6 大于 14.7，静摩擦力拦不住，A 会被拉动。",
        "所以滑动以后，摩擦力要换成动摩擦 μk m₁g。注意：如果不先判断就直接套 μk，可能会算出一个根本不存在的加速度。"
       ]
      },
      {
       "title": "② 求加速度 a 和张力 T",
       "lines": [
        "既然会动，下面来求加速度 a 和绳子的张力 T。",
        "先用一个小技巧：把绳子拉直。",
        "想象把 B 绕着滑轮转上来，和 A 排在同一条直线上。",
        "B 的重力原来沿着绳子向下，拉直以后，就变成了沿着绳子向前。",
        "现在沿绳子方向，只有两个外力：向前的 m₂g，19.6 牛；向后的动摩擦力 μk m₁g，8.82 牛。",
        "绳子的两个张力 T，一个拉 A 向前，一个拉 B 向后。它们是系统的内力，互相抵消。",
        "把 A 和 B 看成一个整体，总质量 5 千克。",
        "加速度 a 等于 19.6 减 8.82，再除以 5，约等于 2.16 m/s²。",
        "要求张力 T，就得把 B 转回去，单独拿出来分析，这叫隔离法。",
        "对 B 列方程：向下的 m₂g 减去向上的 T，等于 m₂a。",
        "解得 T 等于 2 乘以括号 9.8 减 2.16，约等于 15.3 牛。",
        "再用 A 检验一下：T 减去摩擦力 8.82，应该等于 3 乘以 2.16。",
        "算出来，T 也是 15.3 牛，完全吻合！",
        "注意，T 比 m₂g 的 19.6 牛要小，为什么？",
        "如果 T 等于 m₂g，B 受到的合力为零，就不会加速下落了。正因为 B 在加速向下，绳子的拉力才小于它的重力。"
       ]
      },
      {
       "title": "③ 例 2：B 换成 1.0 kg",
       "lines": [
        "例 2：把 B 换成 1 千克，A 还会动吗？如果不动，摩擦力有多大？",
        "还是先判断：m₂g 只有 9.8 牛，小于最大静摩擦 14.7 牛，所以 A 拉不动。",
        "系统静止：B 平衡，所以 T 等于 m₂g，9.8 牛；A 也平衡，静摩擦力等于 T，也是 9.8 牛。",
        "注意，不是 14.7 牛！第一集讲过：静摩擦是小于等于 μs N，14.7 牛只是它的上限。",
        "那 B 至少要多重，A 才会动？需要 m₂g 大于 μs m₁g，也就是 m₂ 大于 1.5 千克。",
        "让 m₂ 从 0.5 千克开始慢慢增大，看看摩擦力怎么变。",
        "一开始 A 不动，摩擦力始终等于 m₂g，沿着这条直线上升。",
        "到 1.5 千克，静摩擦力达到最大值 14.7 牛。",
        "再加一点点，A 就开始滑动，摩擦力突然降到动摩擦的 8.82 牛，之后保持不变。",
        "这和第一集推箱子的图像一模一样。"
       ]
      },
      {
       "title": "小结：连接体四步走",
       "lines": [
        "最后总结一下，连接体问题四步走。",
        "第一，先判断动不动：比较驱动力和最大静摩擦 μs N。",
        "第二，用整体法求加速度：把绳子拉直，只看沿绳方向的外力。",
        "第三，用隔离法求张力：把一个物体单独拿出来列方程。",
        "第四，检查结果：比如 T 应该小于 m₂g，再用另一个物体验算一遍。",
        "掌握这四步，大多数连接体问题都能迎刃而解。"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/06-connected-bodies-and-pulleys.mp4",
     "poster": "posters/en/06-connected-bodies-and-pulleys.jpg",
     "duration": 320.8,
     "chapters": [
      {
       "t": 0.0,
       "title": "Intro"
      },
      {
       "t": 42.3,
       "title": "① Step 1: Will It Move?"
      },
      {
       "t": 90.13,
       "title": "② Find the Acceleration a and Tension T"
      },
      {
       "t": 196.73,
       "title": "③ Example 2: Change B to 1.0 kg"
      },
      {
       "t": 285.47,
       "title": "Summary: Four Steps for Connected Bodies"
      }
     ],
     "transcript": [
      {
       "title": "Intro",
       "lines": [
        "This episode: a classic AP problem, two blocks connected over a pulley.",
        "Block A sits on a table. A light rope runs over a frictionless pulley, and block B hangs from it.",
        "A is 3.0 kg, with μs of 0.5 and μk of 0.3 on the table. B is 2.0 kg.",
        "Two key facts first. One: a light rope has the same tension T everywhere. The pulley only changes the rope's direction.",
        "Two: the rope doesn't stretch. When A moves right by d, B drops by d, so their accelerations are equal in size."
       ]
      },
      {
       "title": "① Step 1: Will It Move?",
       "lines": [
        "Step one: before writing equations, ask whether A will even move when released from rest.",
        "Pulling A forward is the weight of B, m₂g, which is 19.6 N.",
        "Holding A back is static friction, which can reach at most μs m₁g, or 14.7 N.",
        "Like a tug-of-war, static friction maxes out at 14.7 N.",
        "19.6 beats 14.7, so friction can't hold it, and A slides.",
        "Once sliding, friction becomes kinetic, μk m₁g. Plug in μk without checking, and you may get an acceleration that doesn't exist."
       ]
      },
      {
       "title": "② Find the Acceleration a and Tension T",
       "lines": [
        "It moves, so let's find the acceleration a and the rope tension T.",
        "First, a handy trick: straighten out the rope.",
        "Imagine swinging B up around the pulley, in line with A.",
        "The weight of block B pointed down the rope. Now it points forward along the rope.",
        "Along the rope, only two external forces act. Forward: m₂g, 19.6 N.",
        "Backward: kinetic friction, μk m₁g, or 8.82 N.",
        "The two tensions pull A forward and B backward. They're internal forces, so they cancel.",
        "Treat A and B as one system of 5.0 kg.",
        "So a equals 19.6 minus 8.82, over 5, about 2.16 m/s².",
        "To find T, swing B back and analyze it alone. This is called isolating an object.",
        "For B: m₂g down, minus T up, equals m₂a.",
        "So T equals 2 times, 9.8 minus 2.16, about 15.3 N.",
        "Check with A: T minus 8.82 should equal 3 times 2.16.",
        "T comes out to 15.3 N again. A perfect match!",
        "Notice that T is less than m₂g, which is 19.6 N. Why?",
        "If T equaled m₂g, the net force on B would be zero, so B couldn't accelerate. B speeds up downward, so the rope's pull must be less than its weight."
       ]
      },
      {
       "title": "③ Example 2: Change B to 1.0 kg",
       "lines": [
        "Example 2: change B to 1.0 kg. Does block A still move? If not, what's the friction?",
        "Check first: m₂g is only 9.8 N, below the 14.7 N maximum static friction. A stays put.",
        "The system is at rest. B balances, so T equals m₂g, 9.8 N. A balances too, so static friction equals T, also 9.8 N.",
        "Careful: not 14.7 N! As in Episode 1, static friction is at most μs N. So 14.7 is only the upper limit.",
        "So how heavy must B be to move A? We need m₂g greater than μs m₁g, so m₂ above 1.5 kg.",
        "Let m₂ grow slowly from 0.5 kg, and watch the friction.",
        "At first A stays put, so friction equals m₂g, rising along this line.",
        "At 1.5 kg, static friction hits its max, 14.7 N.",
        "A bit more, and A slides. Friction drops to the kinetic value, 8.82 N, and stays there.",
        "It's the same graph as pushing the box in Episode 1."
       ]
      },
      {
       "title": "Summary: Four Steps for Connected Bodies",
       "lines": [
        "To wrap up: four steps for connected bodies.",
        "One: will it move? Compare the driving force with the maximum static friction, μs N.",
        "Two: find a with the whole system. Straighten the rope and keep only external forces along it.",
        "Three: find T by isolating one object.",
        "Four: check your answer. For example, T should be less than m₂g, and the other block should agree.",
        "Master these four steps, and most connected-body problems become easy."
       ]
      }
     ]
    }
   }
  },
  "07": {
   "num": "07",
   "slug": "07-springs-and-elastic-energy",
   "title": {
    "zh": "弹簧与弹性势能",
    "en": "Springs and Elastic Potential Energy"
   },
   "problems": {
    "zh": "为什么是 ½kx²；弹簧发射器；非线性弹簧（积分）",
    "en": "Why ½kx²; a spring launcher; a nonlinear spring (integral)"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/07-springs-and-elastic-energy.mp4",
     "poster": "posters/zh/07-springs-and-elastic-energy.jpg",
     "duration": 291.7,
     "chapters": [
      {
       "t": 0.0,
       "title": "① 胡克定律 Hooke's Law"
      },
      {
       "t": 71.97,
       "title": "② 弹簧做功与弹性势能"
      },
      {
       "t": 141.5,
       "title": "③ 例题 1：弹簧发射器"
      },
      {
       "t": 193.03,
       "title": "④ 例题 2：非线性弹簧"
      },
      {
       "t": 260.3,
       "title": "总结"
      }
     ],
     "transcript": [
      {
       "title": "① 胡克定律 Hooke's Law",
       "lines": [
        "这一集讲弹簧：胡克定律、弹簧做功，和弹性势能。",
        "一根弹簧，左端固定在墙上，右端连着木块。弹簧处于原长时，木块在平衡位置，记作 x 等于 0。",
        "向右拉，弹簧伸长，弹簧力把木块往回拉；",
        "向左推，弹簧压缩，弹簧力把木块往回推。",
        "这就是胡克定律：Fs = −kx。负号表示弹簧力总是指回平衡位置，所以叫回复力。",
        "画成 F–x 图，是一条过原点的直线，斜率是负 k。k 叫劲度系数，单位牛每米，k 越大，弹簧越硬。",
        "怎么测 k？把弹簧竖直挂起来，挂上 0.5 千克的物体，弹簧伸长 0.098 米。",
        "静止时，弹簧力等于重力：k x 等于 mg，mg 是 4.9 牛。所以 k 等于 4.9 除以 0.098，等于 50 N/m。"
       ]
      },
      {
       "title": "② 弹簧做功与弹性势能",
       "lines": [
        "问题一：把弹簧从原长慢慢拉长 x，你做了多少功？是 k x 乘 x 吗？",
        "慢慢拉，你的拉力始终等于 k x：从 0 开始，越拉越大。力在变，不能直接用力乘位移。",
        "k x 乘 x 是这整个矩形，相当于一开始就用最大的力在拉，算多了。",
        "真正的功，是图线下的面积：一个三角形，二分之一乘 x 乘 k x，等于二分之一 k x 平方，正好是矩形的一半。",
        "用积分写也一样：k x 从 0 到 x 积分，得到二分之一 k x 平方。",
        "弹簧力方向相反，对木块做负功，负二分之一 k x 平方。你做的功储存在弹簧里，这就是弹性势能：Us = ½kx²。",
        "注意：拉长两倍，力变成两倍，面积却是四倍，储存的能量是原来的四倍。"
       ]
      },
      {
       "title": "③ 例题 1：弹簧发射器",
       "lines": [
        "例题一：劲度系数 200 牛每米的弹簧被压缩 0.1 米，把 0.5 千克的木块弹出去，水平面光滑。木块离开弹簧时速度多大？",
        "压缩时，弹簧储存的弹性势能是二分之一乘 200 乘 0.1 的平方，等于 1 焦。",
        "松手后，弹簧推着木块加速：U 减少多少，K 就增加多少，1 焦全部变成动能。",
        "二分之一 m v 平方等于 1 焦，v 等于根号下 2 乘 1 除以 0.5，等于 2 米每秒。",
        "木块在弹簧恢复原长、x 等于 0 的地方离开弹簧。这里弹簧力为零，速度最大，之后匀速滑走。"
       ]
      },
      {
       "title": "④ 例题 2：非线性弹簧",
       "lines": [
        "例题二：一根非线性弹簧，F = −(kx + βx³)，k 等于 100，β 等于 1000。压缩 0.2 米后释放 0.3 千克的木块，求离开时的速度。",
        "看 F–x 图：多了 βx³ 这一项，曲线越来越陡，比 k 等于 100 的直线更硬。",
        "这时不能再用二分之一 k x 平方，要回到定义：功等于力对位移的积分，也就是曲线下的面积。",
        "积分得到二分之一 k x 平方，加四分之一β x 四次方。",
        "代入 0.2 米：直线下面是 2.0 焦，曲线多出来 0.4 焦，一共 2.4 焦。",
        "这些功全部变成动能：二分之一 m v 平方等于 2.4 焦，v 等于根号 16，4 米每秒。",
        "记住：不是理想弹簧，就不能套二分之一 k x 平方，要回到力对位移的积分。"
       ]
      },
      {
       "title": "总结",
       "lines": [
        "最后总结。弹簧力 Fs = −kx，总是指回平衡位置；",
        "变力做功是力对位移的积分，也就是 F–x 图 下的面积；",
        "理想弹簧的弹性势能是二分之一 k x 平方；非线性弹簧，就回到积分。",
        "下一集：能量守恒与摩擦。我们下集见！"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/07-springs-and-elastic-energy.mp4",
     "poster": "posters/en/07-springs-and-elastic-energy.jpg",
     "duration": 311.9,
     "chapters": [
      {
       "t": 0.0,
       "title": "① Hooke's Law"
      },
      {
       "t": 74.57,
       "title": "② Spring Work & Elastic Potential Energy"
      },
      {
       "t": 147.83,
       "title": "③ Example 1: Spring Launcher"
      },
      {
       "t": 204.53,
       "title": "④ Example 2: A Nonlinear Spring"
      },
      {
       "t": 281.33,
       "title": "Summary"
      }
     ],
     "transcript": [
      {
       "title": "① Hooke's Law",
       "lines": [
        "This episode is all about springs: Hooke's law, spring work, and elastic potential energy.",
        "A spring is fixed to a wall and attached to a block. At natural length, the block is at equilibrium, x equals 0.",
        "Pull right: the spring stretches, and its force pulls the block back.",
        "Push left: the spring compresses, and its force pushes the block back.",
        "This is Hooke's law: Fs = −kx. The minus sign means the force always points back toward equilibrium. It's a restoring force.",
        "On an F–x graph, it's a line through the origin with slope negative k. k is the spring constant, in N/m. Bigger k means a stiffer spring.",
        "How do we measure k? Hang the spring vertically with a 0.50 kg mass. It stretches 0.098 m.",
        "At rest, the spring force balances gravity: k x equals mg, which is 4.9 N. So k equals 4.9 over 0.098, or 50 N/m."
       ]
      },
      {
       "title": "② Spring Work & Elastic Potential Energy",
       "lines": [
        "Question 1: you slowly stretch a spring by x from its natural length. How much work do you do? Is it k x times x?",
        "Pulling slowly, your force always equals k x, growing from zero. The force changes, so you can't just multiply force by displacement.",
        "k x times x is this whole rectangle, as if you pulled with the maximum force from the start. That's too much.",
        "The real work is the area under the graph: a triangle, one half times x times k x. That's one half k x squared, exactly half the rectangle.",
        "Or with an integral: integrating k x from 0 to x gives one half k x squared.",
        "The spring force points the other way, so it does negative work on the block: negative one half k x squared. Your work is stored in the spring as elastic potential energy, Us = ½kx².",
        "Notice: stretch it twice as far, and the force doubles, but the area quadruples. The spring stores four times the energy."
       ]
      },
      {
       "title": "③ Example 1: Spring Launcher",
       "lines": [
        "Example 1: a spring with k equals 200 N/m is compressed 0.10 m. It launches a 0.50 kg block with no friction. How fast is the block moving as it leaves the spring?",
        "Compressed, the spring stores one half times 200 times 0.1 squared, or 1.0 J.",
        "After release, the spring speeds the block up. Whatever U loses, K gains, until the full joule is kinetic energy.",
        "One half m v squared equals 1.0 J, so v equals the square root of 2 times 1 over 0.5, which is 2.0 m/s.",
        "The block leaves the spring at natural length, x equals 0. There the spring force is zero and the speed is maximum. Then it slides on at constant speed."
       ]
      },
      {
       "title": "④ Example 2: A Nonlinear Spring",
       "lines": [
        "Example 2: a nonlinear spring, F = −(kx + βx³), with k equals 100 and β equals 1000. It's compressed 0.20 m and launches a 0.30 kg block. Find its exit speed.",
        "On the F–x graph, the βx³ term makes the curve steeper and steeper, stiffer than the plain k x line.",
        "Now one half k x squared doesn't work. Go back to the definition: work is the integral of force over displacement, the area under the curve.",
        "Integrating gives one half k x squared, plus one quarter β x to the fourth.",
        "Plug in 0.20 m: the line gives 2.0 J, the curve adds 0.4 J, for 2.4 J total.",
        "It all becomes kinetic energy: one half m v squared equals 2.4 J, so v is the square root of 16, 4.0 m/s.",
        "Remember: for a non-ideal spring, don't use one half k x squared. Go back to the integral of force over displacement."
       ]
      },
      {
       "title": "Summary",
       "lines": [
        "To sum up: the spring force, Fs = −kx, always points back toward equilibrium.",
        "The work done by a variable force is the integral of force over displacement: the area under the F–x graph.",
        "An ideal spring stores one half k x squared. For a nonlinear spring, go back to the integral.",
        "Next time: energy conservation with friction. See you then!"
       ]
      }
     ]
    }
   }
  },
  "08": {
   "num": "08",
   "slug": "08-energy-conservation-with-friction",
   "title": {
    "zh": "能量守恒与摩擦",
    "en": "Energy Conservation with Friction"
   },
   "problems": {
    "zh": "能量柱状图；斜面+摩擦+弹簧（FRQ 经典）；由凹陷求平均力",
    "en": "Energy bar charts; incline + friction + spring (classic FRQ); average force from a dent"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/08-energy-conservation-with-friction.mp4",
     "poster": "posters/zh/08-energy-conservation-with-friction.jpg",
     "duration": 307.2,
     "chapters": [
      {
       "t": 0.0,
       "title": "① 能量账本"
      },
      {
       "t": 50.93,
       "title": "② 例题 1：滑下，再停下"
      },
      {
       "t": 110.67,
       "title": "③ 例题 2：斜面 + 摩擦 + 弹簧"
      },
      {
       "t": 226.53,
       "title": "④ 由凹陷求平均力"
      },
      {
       "t": 276.57,
       "title": "总结"
      }
     ],
     "transcript": [
      {
       "title": "① 能量账本",
       "lines": [
        "这一集讲能量守恒：有摩擦的时候，机械能到哪里去了？",
        "机械能 E 等于动能、重力势能和弹性势能之和。",
        "看一个木块在光滑的 U 形轨道上来回滑，右边是它的能量柱状图。",
        "只有重力、弹力这类保守力做功时，动能和重力势能此消彼长，合计不变：机械能守恒。",
        "现在把底部换成一段粗糙面。",
        "每滑过一次，机械能就矮一截，热就多一截，最后木块停在了粗糙面上。",
        "摩擦力做的功，等于机械能的变化，也就是负 f 乘 d。",
        "机械能变少了，但加上热，合计始终不变。"
       ]
      },
      {
       "title": "② 例题 1：滑下，再停下",
       "lines": [
        "例题 1：木块从 1.8 米高的光滑斜坡顶端由静止滑下，接着在 μk 等于 0.30 的水平地面上滑行。它能滑多远？",
        "先看能量的流向。斜坡光滑，重力势能全部变成动能；到了地面，摩擦把动能一点点变成热，直到停下。",
        "从 A 到 B：mgh 等于二分之一 m v 平方，坡底速度 v 等于√(2gh)，约 5.9 米每秒。",
        "从 A 到 C：初末动能都是零，重力势能全部变成了热：mgh 等于 μk mg d。",
        "m 和 g 都约掉，d 等于 h 除以 μk，6.0 米。",
        "结果和质量无关；只要坡是光滑的，和坡的形状也无关。"
       ]
      },
      {
       "title": "③ 例题 2：斜面 + 摩擦 + 弹簧",
       "lines": [
        "例题 2，本集重点：2.0 千克的木块放在倾角 30 度的斜面上，从距离弹簧自由端 2.0 米处由静止下滑。μk 等于 0.20，弹簧的 k 是 500 牛每米。求弹簧的最大压缩量。",
        "初态：木块静止在出发点；末态：弹簧压到最短，木块瞬间静止。设最大压缩量为 x，木块一共走了 d 加 x。",
        "滑下时，重力势能先变成动能；碰到弹簧，动能又转成弹性势能；摩擦一路都在生热。",
        "到了最低点，动能为零。所以：减少的重力势能，等于弹性势能加上热。",
        "写成方程：mg(d + x)sinθ 等于 ½kx²，加上 μk mg cosθ (d + x)。",
        "左边两项合并，系数 mg 乘括号 sinθ 减 μk cosθ，约 6.41 牛，正是第 4 集里下滑的合力。",
        "代入数字，整理成 250 x 平方减 6.41 x 减 12.8 等于 0，取正根，x 约 0.24 米。",
        "核对一下：重力势能减少约 21.9 焦，等于弹性势能 14.3 焦，加上热 7.6 焦。",
        "追问：木块被弹回去，能回到出发点吗？",
        "不能，摩擦一直在消耗机械能。上行时，弹性势能变成重力势能和热，解得 s 约 1.09 米。",
        "也就是只到自由端上方约 0.85 米，离出发点还差得远。"
       ]
      },
      {
       "title": "④ 由凹陷求平均力",
       "lines": [
        "再看一道：0.20 千克的小球从 1.25 米高处落进沙坑，陷进去 5.0 厘米后停下。沙子对球的平均阻力多大？",
        "小球先自由下落，进入沙子后，阻力 F 在很短的距离内把它刹住。",
        "取全过程，初末动能都是零。重力做功 mg 乘 h 加 d，注意要算上陷进去的那 5 厘米；沙子做功负 F d。",
        "所以 F 等于 mg 乘 h 加 d，再除以 d，约 51 牛，是重力的 26 倍。",
        "这也是跳远要落进沙坑、落地要屈膝的原因：停下的距离 d 越大，平均力就越小。"
       ]
      },
      {
       "title": "总结",
       "lines": [
        "最后总结。",
        "机械能是动能、重力势能和弹性势能之和。",
        "非保守力做的功，等于机械能的变化；摩擦生的热，等于 μk N 乘以滑过的路程。",
        "做题三步：选初末状态，列能量账，解方程。",
        "记住：能量不会消失，摩擦只是把机械能变成了热。我们下一集见！"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/08-energy-conservation-with-friction.mp4",
     "poster": "posters/en/08-energy-conservation-with-friction.jpg",
     "duration": 331.4,
     "chapters": [
      {
       "t": 0.0,
       "title": "① Energy Bookkeeping"
      },
      {
       "t": 48.67,
       "title": "② Example 1: Slide Down, Then Stop"
      },
      {
       "t": 113.2,
       "title": "③ Example 2: Incline + Friction + Spring"
      },
      {
       "t": 242.2,
       "title": "④ Average Force from Stopping Distance"
      },
      {
       "t": 297.43,
       "title": "Summary"
      }
     ],
     "transcript": [
      {
       "title": "① Energy Bookkeeping",
       "lines": [
        "In this episode: when there's friction, where does the mechanical energy go?",
        "Mechanical energy is kinetic plus gravitational and elastic potential energy.",
        "A block slides back and forth on a frictionless U-shaped track, with its energy bar chart on the right.",
        "When only conservative forces do work, K and U trade back and forth, and mechanical energy is conserved.",
        "Now make part of the bottom rough.",
        "Each crossing, mechanical energy shrinks and thermal energy grows, until the block stops.",
        "The work done by friction equals the change in mechanical energy: negative f d.",
        "Mechanical energy drops, but add the thermal energy, and the total stays the same."
       ]
      },
      {
       "title": "② Example 1: Slide Down, Then Stop",
       "lines": [
        "Example 1: a block slides from rest down a frictionless ramp 1.8 meters high. Then it crosses a floor with μk equal to 0.30. How far does it slide?",
        "First, the energy flow. The frictionless ramp turns all the potential energy into kinetic energy. On the floor, friction turns it into heat until the block stops.",
        "From A to B: mgh = ½mv², so at the bottom, v = √(2gh), about 5.9 m/s.",
        "From A to C: the block starts and ends at rest, so all the potential energy becomes heat: mgh = μk mg d.",
        "The m and g cancel: d = h/μk, or 6.0 m.",
        "The answer doesn't depend on mass, or, for a frictionless ramp, on the ramp's shape."
       ]
      },
      {
       "title": "③ Example 2: Incline + Friction + Spring",
       "lines": [
        "Example 2 is the key problem. A 2.0 kg block starts from rest on a 30-degree incline, 2.0 meters from the free end of a spring. μk is 0.20, and k is 500 N/m. Find the maximum compression.",
        "Initially, the block is at rest. At the end, the spring is fully compressed and the block is momentarily at rest. If the maximum compression is x, the block travels d plus x.",
        "On the way down, gravitational potential energy becomes kinetic energy, then elastic energy at the spring. Friction makes heat the whole way.",
        "At the lowest point, K is zero. So the lost gravitational potential energy equals elastic energy plus heat.",
        "As an equation: mg(d + x) sin θ equals ½kx², plus μk mg cos θ (d + x).",
        "Combine the d plus x terms. The coefficient, m g times sin θ minus μk cos θ, is about 6.41 N, the net downhill force from Episode 4.",
        "Plug in and rearrange: 250 x squared minus 6.41 x minus 12.8 equals zero. Take the positive root: x is about 0.24 m.",
        "Check: gravitational potential energy drops about 21.9 J. That's 14.3 J of elastic energy plus 7.6 J of heat.",
        "Follow-up: when the spring pushes it back, does the block return to the start?",
        "No. Friction keeps draining mechanical energy. On the way up, elastic potential energy becomes gravitational potential energy and heat. Solving gives s of about 1.09 m.",
        "That's only 0.85 m above the spring's free end, far short of the start."
       ]
      },
      {
       "title": "④ Average Force from Stopping Distance",
       "lines": [
        "One more: a 0.20 kg ball drops 1.25 meters into sand and sinks 5.0 centimeters before stopping. What's the average force from the sand?",
        "It falls freely, then the sand's force F stops it in a very short distance.",
        "Take the whole trip: the kinetic energy is zero at both ends. Gravity does work m g times h plus d; don't forget the 5 centimeters in the sand. The sand does work negative F d.",
        "So F equals m g times h plus d, divided by d. That's about 51 N, 26 times the ball's weight.",
        "That's why long jumpers land in sand, and why you bend your knees when you land. The longer the stopping distance d, the smaller the average force."
       ]
      },
      {
       "title": "Summary",
       "lines": [
        "To sum up.",
        "Mechanical energy is kinetic energy plus gravitational and elastic potential energy.",
        "The work done by nonconservative forces equals the change in mechanical energy. The heat from friction is μk N times the distance slid.",
        "Three steps: pick the initial and final states, write the energy ledger, and solve.",
        "Remember: energy never disappears. Friction just turns mechanical energy into heat. See you next episode!"
       ]
      }
     ]
    }
   }
  },
  "09": {
   "num": "09",
   "slug": "09-conservative-forces-and-potential-energy",
   "title": {
    "zh": "保守力与势能曲线",
    "en": "Conservative Forces and Potential Energy Curves"
   },
   "problems": {
    "zh": "F = −dU/dx；转折点与平衡稳定性；U = 2x³ − 6x 例题",
    "en": "F = −dU/dx; turning points and stability; the U = 2x³ − 6x example"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/09-conservative-forces-and-potential-energy.mp4",
     "poster": "posters/zh/09-conservative-forces-and-potential-energy.jpg",
     "duration": 314.3,
     "chapters": [
      {
       "t": 0.0,
       "title": "① 保守力 vs 非保守力"
      },
      {
       "t": 68.03,
       "title": "② 力 = 势能曲线的负斜率"
      },
      {
       "t": 124.57,
       "title": "③ 能量图：转折点与平衡"
      },
      {
       "t": 192.17,
       "title": "④ 例题"
      },
      {
       "t": 288.5,
       "title": "总结"
      }
     ],
     "transcript": [
      {
       "title": "① 保守力 vs 非保守力",
       "lines": [
        "这一集讲保守力和势能曲线。",
        "从 A 到 B 有两条路：直的斜坡和弯曲的长路。重力做的功一样吗？摩擦力呢？",
        "先走直路：下降 h，重力做功 mgh；摩擦力做负功。",
        "再走长路：下坡时重力做正功，上坡时做负功，抵消之后还是 mgh。",
        "摩擦力却一路做负功，路越长，负功越多。",
        "而重力做功只看高度差，与路径无关。",
        "做功与路径无关的力叫保守力；等价地说，沿闭合路径走一圈，总功为零。",
        "保守力可以定义势能 U：它做的功等于势能的减少量。",
        "重力、弹力、万有引力、静电力是保守力；摩擦力、空气阻力不是。"
       ]
      },
      {
       "title": "② 力 = 势能曲线的负斜率",
       "lines": [
        "在一维情况下，力等于势能曲线的负斜率：F = −dU/dx。",
        "用手慢慢移动小球，看切线的斜率。",
        "这里斜率为负，力为正，指向 +x。",
        "谷底斜率为零，力也为零。",
        "上坡斜率为正，力为负，指向 −x。",
        "峰顶斜率又为零；过了峰顶，力再次指向 +x。",
        "力总是指向势能降低的方向，就像小球往谷底滚。",
        "检验两个例子：重力势能 U = mgy，求导取负号，得 F = −mg，向下。",
        "弹性势能 U = ½kx²，得 F = −kx，指回平衡位置。"
       ]
      },
      {
       "title": "③ 能量图：转折点与平衡",
       "lines": [
        "在势能图上画一条水平线，代表总机械能 E。",
        "任一位置，K = E − U，就是这条线到曲线的竖直距离。",
        "动能不能为负，所以曲线高出 E 的灰色区域，小球去不了。",
        "E 和 U 的交点叫转折点：速度为零，小球在这里掉头。",
        "释放小球：滚向谷底时 K 变大、越来越快；到转折点时速度减为零，然后掉头。蓝色是 U，绿色是 K，加起来始终是 E。",
        "斜率为零的地方力为零，叫平衡点。",
        "谷底是稳定平衡：轻推一下，它会被拉回来，来回振动。",
        "峰顶是不稳定平衡：轻推一下，它就滚走了。",
        "平直段是随遇平衡：放在哪里都能静止。",
        "判断方法：U 的二阶导数大于零是谷，稳定；小于零是峰，不稳定。"
       ]
      },
      {
       "title": "④ 例题",
       "lines": [
        "例题：质点在 U(x) = 2x³ − 6x 的势场中运动。求 x 等于 2 米处的力、平衡点和稳定性，以及从 x 等于 0 释放后的最大速度和运动范围。",
        "先画出曲线：x 等于负 1 处是峰，U 等于 4 焦；x 等于 1 处是谷，U 等于负 4 焦。",
        "第一问：F 等于负的 d U d x，等于 6 减 6 x 平方。",
        "代入 x 等于 2，F 等于负 18 牛，指向负 x 方向。",
        "第二问：令 F 等于零，得 x 等于正负 1 米。",
        "二阶导数是 12 x：x 等于 1 时为正，是谷，稳定；x 等于负 1 时为负，是峰，不稳定。",
        "第三问：从 x 等于 0 静止释放，E 等于 U(0)，也就是零，E 线就是横轴。",
        "曲线高于横轴的地方去不了；这里 F 等于正 6 牛，质点向右滑向谷底。",
        "最大速度在谷底：K 等于 E 减 U，0 减负 4，等于 4 焦，所以 v 等于 4.0 米每秒。",
        "转折点满足 U 等于零：x 等于 0 和根号 3，约 1.73 米。",
        "所以质点在 0 和 1.73 米之间来回运动，经过谷底时最快。"
       ]
      },
      {
       "title": "总结",
       "lines": [
        "最后总结。",
        "保守力做功与路径无关，等于势能减少量；力是势能曲线的负斜率。",
        "K 等于 E 减 U，E 等于 U 处是转折点；斜率为零处是平衡点：谷稳定，峰不稳定。",
        "我们下期再见！"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/09-conservative-forces-and-potential-energy.mp4",
     "poster": "posters/en/09-conservative-forces-and-potential-energy.jpg",
     "duration": 342.3,
     "chapters": [
      {
       "t": 0.0,
       "title": "① Conservative vs. Nonconservative Forces"
      },
      {
       "t": 71.6,
       "title": "② Force = Negative Slope of U(x)"
      },
      {
       "t": 133.43,
       "title": "③ Energy Diagrams: Turning Points & Equilibrium"
      },
      {
       "t": 205.17,
       "title": "④ Example"
      },
      {
       "t": 313.73,
       "title": "Summary"
      }
     ],
     "transcript": [
      {
       "title": "① Conservative vs. Nonconservative Forces",
       "lines": [
        "This episode: conservative forces and potential energy curves.",
        "There are two paths from A to B: a straight ramp and a long, curvy path. Does gravity do the same work on both? What about friction?",
        "The straight path first: gravity does work mgh, and friction does negative work.",
        "On the long path, gravity does positive work going down and negative work going up, netting mgh again.",
        "But friction does negative work the whole way: the longer the path, the more negative work.",
        "Gravity's work depends only on the height difference, not on the path.",
        "A force whose work is path-independent is called conservative. Equivalently, its work around any closed path is zero.",
        "For a conservative force, we can define a potential energy U: its work equals the decrease in U.",
        "Gravity, spring forces, universal gravitation, and electrostatic forces are conservative. Friction and air resistance are not."
       ]
      },
      {
       "title": "② Force = Negative Slope of U(x)",
       "lines": [
        "In one dimension, the force is the negative slope of the potential energy curve: F = −dU/dx.",
        "Move the ball slowly and watch the tangent's slope.",
        "Here the slope is negative, so the force is positive, pointing toward +x.",
        "At the valley bottom, the slope and the force are both zero.",
        "Going uphill, the slope is positive, so the force is negative, toward −x.",
        "At the peak, the slope is zero again. Past the peak, the force points toward +x again.",
        "The force always points toward lower potential energy, like a ball rolling into a valley.",
        "Let's check two examples. For gravity, U = mgy; take the negative derivative and get F = −mg, pointing down.",
        "For a spring, U = ½kx² gives F = −kx, pointing back toward equilibrium."
       ]
      },
      {
       "title": "③ Energy Diagrams: Turning Points & Equilibrium",
       "lines": [
        "On the graph, draw a horizontal line for the total mechanical energy E.",
        "At any position, K = E − U: the vertical gap between the curve and this line.",
        "K can't be negative, so the ball can't enter the gray regions where U is above E.",
        "Where E meets U is a turning point: the speed is zero, and the ball turns around.",
        "Release the ball. Rolling into the valley, K grows and it speeds up; at the turning point, it slows to zero and turns back. Blue is U, green is K, and together they always make E.",
        "Where the slope is zero, the force is zero: these are equilibrium points.",
        "The valley bottom is a stable equilibrium: nudge it, and it's pulled back and oscillates.",
        "The peak is an unstable equilibrium: one small nudge, and it rolls away.",
        "The flat region is a neutral equilibrium: the ball can rest anywhere.",
        "To tell them apart, check U's second derivative: positive means a valley, stable; negative means a peak, unstable."
       ]
      },
      {
       "title": "④ Example",
       "lines": [
        "Example: a particle moves in the potential U(x) = 2x³ − 6x. Find the force at x equals 2 meters, and the equilibrium points and their stability. Then, released from rest at x equals 0, find its top speed and range of motion.",
        "Sketch the curve: a peak at x equals negative 1, where U is 4 joules, and a valley at x equals 1, where U is negative 4.",
        "Part (a): F equals negative d U d x, which is 6 minus 6 x squared.",
        "At x equals 2, F is negative 18 N, pointing toward negative x.",
        "Part (b): set F equal to zero, and get x equals plus or minus 1 meter.",
        "The second derivative is 12 x. At x equals 1 it's positive: a valley, so stable. At x equals negative 1 it's negative: a peak, so unstable.",
        "Part (c): released from rest at x equals 0, E equals U(0), which is zero. So the E line is just the x-axis.",
        "Where the curve is above the axis is forbidden. Here F is positive 6 N, so the particle slides right, toward the valley.",
        "The top speed is at the valley bottom: K equals E minus U, zero minus negative 4, or 4 J. So v is 4.0 m/s.",
        "The turning points are where U equals zero: x equals 0 and root 3, about 1.73 m.",
        "So it moves back and forth between 0 and 1.73 meters, fastest at the valley bottom."
       ]
      },
      {
       "title": "Summary",
       "lines": [
        "To sum up.",
        "A conservative force's work is path-independent and equals the decrease in potential energy. The force is the negative slope of the potential energy curve.",
        "K equals E minus U, and turning points are where E equals U. Equilibrium points are where the slope is zero: valleys are stable, peaks are unstable.",
        "See you next time!"
       ]
      }
     ]
    }
   }
  },
  "10": {
   "num": "10",
   "slug": "10-power",
   "title": {
    "zh": "功率",
    "en": "Power"
   },
   "problems": {
    "zh": "P = F·v；汽车上坡功率；由 P(t) 积分求功",
    "en": "P = F·v; a car climbing a hill; work from integrating P(t)"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/10-power.mp4",
     "poster": "posters/zh/10-power.jpg",
     "duration": 271.9,
     "chapters": [
      {
       "t": 0.0,
       "title": "开场"
      },
      {
       "t": 58.47,
       "title": "① 瞬时功率 P = F·v"
      },
      {
       "t": 115.9,
       "title": "② 例题 1：汽车上坡"
      },
      {
       "t": 186.37,
       "title": "③ 例题 2：由 P(t) 求功"
      },
      {
       "t": 239.7,
       "title": "总结"
      }
     ],
     "transcript": [
      {
       "title": "开场",
       "lines": [
        "这一集讲功率，也就是做功的快慢。",
        "问题一：两个人把同一个箱子搬上同一层楼，一个用 10 秒，一个用 20 秒。谁做的功多？谁的功率大？",
        "甲快，乙慢，最后都站上了同一层楼。",
        "箱子的重力是 mg，两人都把它举高了 h，做的功都是 mgh，一样多。",
        "但甲只用了一半的时间，所以甲的功率是乙的 2 倍。",
        "功率，就是单位时间内做的功。平均功率等于功除以时间；瞬时功率是功对时间的导数，dW/dt。",
        "单位是瓦特：1 瓦等于每秒 1 焦。1 马力约等于 746 瓦。"
       ]
      },
      {
       "title": "① 瞬时功率 P = F·v",
       "lines": [
        "一小段时间 dt 内，力做的功是 F 点乘位移 dr。",
        "两边除以 dt，dr/dt 就是速度 v，于是功率等于 F 点乘 v。",
        "看一个抛出去的球：重力 mg 竖直向下，速度沿着轨迹的切线。",
        "上升时，夹角大于 90 度，P 为负，重力让球减速；",
        "到了最高点，力与速度垂直，P 等于零；",
        "下落时，夹角小于 90 度，P 为正，球越来越快。",
        "用单位矢量时，直接套分量公式：F = (3i + 4j) N，v = (2i − 1j) m/s。",
        "P 等于 3 乘 2，加上 4 乘负 1，等于 2 瓦。",
        "两个矢量的夹角约 80 度，接近 90 度，所以功率很小。"
       ]
      },
      {
       "title": "② 例题 1：汽车上坡",
       "lines": [
        "例题一：1200 千克的汽车以 25 米每秒匀速行驶，阻力共 600 牛。平路上，发动机的输出功率多大？以同样速度开上 sinθ = 0.050 的坡呢？",
        "匀速，说明合力为零：牵引力 F 等于阻力 f，都是 600 牛。",
        "功率 P 等于 F v，600 乘 25，等于 15000 瓦，也就是 15 千瓦，大约 20 马力。",
        "上坡时，还要克服重力沿斜面向下的分量 mg sinθ：1200 乘 9.8 乘 0.05，等于 588 牛。",
        "牵引力要加到 1188 牛；功率等于 1188 乘 25，约 29.7 千瓦，差不多翻倍。",
        "发动机的功率有上限。功率一定时，F 等于 P 除以 v，牵引力和速度成反比。",
        "所以上陡坡要换低速挡：速度减半，牵引力就加倍。"
       ]
      },
      {
       "title": "③ 例题 2：由 P(t) 求功",
       "lines": [
        "例题二：电机对 2.0 千克物体的输出功率是 P = 6t² 瓦。物体从静止开始，在光滑水平面上运动。求 2 秒时的速度。",
        "功率是功对时间的导数；反过来，功就是功率对时间的积分，也就是 P–t 图 下的面积。",
        "时间从 0 走到 2 秒，面积不断累积，物体也越来越快。",
        "6t² 的积分是 2t³，代入上下限，得到 16 焦。",
        "水平面光滑，没有别的力做功，这 16 焦全部变成动能。",
        "二分之一乘 2.0 乘 v 平方等于 16，解得 v 等于 4.0 米每秒。"
       ]
      },
      {
       "title": "总结",
       "lines": [
        "最后总结。",
        "平均功率是功除以时间；瞬时功率是 dW/dt，也等于 F 点乘 v。",
        "知道 P 随时间的变化，积分就得到功，也就是 P–t 图 下的面积。",
        "匀速行驶时，牵引力等于阻力，功率等于 F v。",
        "Unit 3 到这里就讲完了，祝 Unit 3 小测顺利！"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/10-power.mp4",
     "poster": "posters/en/10-power.jpg",
     "duration": 293.2,
     "chapters": [
      {
       "t": 0.0,
       "title": "Intro"
      },
      {
       "t": 61.13,
       "title": "① Instantaneous power: P = F·v"
      },
      {
       "t": 126.87,
       "title": "② Example 1: A car climbing a hill"
      },
      {
       "t": 206.9,
       "title": "③ Example 2: Work from P(t)"
      },
      {
       "t": 263.7,
       "title": "Summary"
      }
     ],
     "transcript": [
      {
       "title": "Intro",
       "lines": [
        "This episode is about power: how fast work gets done.",
        "Question 1: Two people carry the same box up the same stairs. One takes 10 seconds, the other takes 20 seconds. Who does more work? Who has more power?",
        "Person A is fast, person B is slow, and both end up on the same floor.",
        "The box weighs m g, and both lift it the same height h. So each does the same work, mgh.",
        "But A takes only half the time, so A's power is twice B's.",
        "Power is work done per unit time. Average power is work divided by time. Instantaneous power is the time derivative of work, dW/dt.",
        "The unit is the watt: 1 watt equals 1 joule per second. And 1 horsepower is about 746 watts."
       ]
      },
      {
       "title": "① Instantaneous power: P = F·v",
       "lines": [
        "In a tiny time dt, a force does work F dot the displacement dr.",
        "Divide both sides by dt. Since dr/dt is the velocity v, power equals F dot v.",
        "Take a thrown ball: gravity, m g, points down, and the velocity is tangent to the path.",
        "On the way up, the angle is more than 90 degrees, so P is negative: gravity slows the ball down.",
        "At the top, force and velocity are perpendicular, so P is zero.",
        "On the way down, the angle is less than 90 degrees, so P is positive, and the ball speeds up.",
        "With unit vectors, just use components. Here, F = (3î + 4ĵ) N and v = (2î − 1ĵ) m/s.",
        "P equals 3 times 2, plus 4 times negative 1, which is 2 watts.",
        "The angle between the two vectors is about 80 degrees, close to 90, so the power is small."
       ]
      },
      {
       "title": "② Example 1: A car climbing a hill",
       "lines": [
        "Example 1: A 1200 kg car moves at a steady 25 meters per second against 600 newtons of resistance. What power does the engine put out on level ground? And going up a slope with sin θ = 0.050, at the same speed?",
        "Constant speed means zero net force: driving force F equals resistance f, 600 newtons.",
        "P equals F v: 600 times 25 is 15,000 watts, or 15 kilowatts, about 20 horsepower.",
        "Uphill, the car must also overcome gravity's component down the slope, m g sin θ. 1200 times 9.8 times 0.05 is 588 newtons.",
        "So the driving force rises to 1188 N, and the power is 1188 times 25, about 29.7 kilowatts: nearly double.",
        "An engine's power has a limit. At fixed power, F equals P over v: the driving force is inversely proportional to speed.",
        "That's why you shift to a low gear on a steep hill: cut the speed in half, and the driving force doubles."
       ]
      },
      {
       "title": "③ Example 2: Work from P(t)",
       "lines": [
        "Example 2: A motor delivers P = 6t² watts to a 2.0 kg object. It starts from rest on a frictionless horizontal surface. Find its speed at 2 seconds.",
        "Power is the derivative of work with respect to time. Going the other way, work is the integral of power over time: the area under the P–t graph.",
        "As time runs from 0 to 2 seconds, the area piles up, and the object speeds up.",
        "The integral of 6t² is 2t³. Plug in the limits, and you get 16 joules.",
        "With no friction and no other force doing work, all 16 joules become kinetic energy.",
        "One half times 2.0 times v squared equals 16, so v equals 4.0 meters per second."
       ]
      },
      {
       "title": "Summary",
       "lines": [
        "Let's sum up.",
        "Average power is work divided by time. Instantaneous power is dW/dt, which also equals F dot v.",
        "Integrate P over time to get the work: the area under the P–t graph.",
        "At constant speed, driving force equals resistance, and P equals F v.",
        "That wraps up Unit 3. Good luck on your Unit 3 quiz!"
       ]
      }
     ]
    }
   }
  },
  "11": {
   "num": "11",
   "slug": "11-kinematics-with-calculus",
   "title": {
    "zh": "运动学与微积分",
    "en": "Kinematics with Calculus"
   },
   "problems": {
    "zh": "x = t³−6t²+9t：何时静止/向左/加速减速、位移 vs 路程；由 a(t) 积分求 x(t)",
    "en": "x = t³−6t²+9t: when it is at rest, moving left, speeding up; displacement vs. distance; integrating a(t) to get x(t)"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/11-kinematics-with-calculus.mp4",
     "poster": "posters/zh/11-kinematics-with-calculus.jpg",
     "duration": 295.6,
     "chapters": [
      {
       "t": 0.0,
       "title": "① x、v、a 与微积分"
      },
      {
       "t": 56.47,
       "title": "② 例题 1：已知 x(t)"
      },
      {
       "t": 195.23,
       "title": "③ 例题 2：已知 a(t)，积分"
      },
      {
       "t": 270.46,
       "title": "总结"
      }
     ],
     "transcript": [
      {
       "title": "① x、v、a 与微积分",
       "lines": [
        "这一集讲运动学里的微积分：位置、速度、加速度，靠求导和积分连在一起。",
        "质点在数轴上运动，下面同步画出它的 x–t 图。",
        "任一时刻，x–t 图 切线的斜率，就是这一刻的速度：v = dx/dt。",
        "把每一刻的斜率记下来，就得到 v–t 图：斜率由正变零、再变负，质点先向右、停下、再向左。",
        "v–t 图 的斜率又是加速度：a = dv/dt，这里恒为负 2 米每二次方秒。",
        "所以，x 求导得 v，v 求导得 a：求导看斜率。",
        "反过来，a 积分得 v，v 积分得 x：积分看面积；每积一次分，都要用初始条件定出常数。"
       ]
      },
      {
       "title": "② 例题 1：已知 x(t)",
       "lines": [
        "例题一：质点沿 x 轴运动，x = t³ − 6t² + 9t，时间从 0 到 4 秒。一共五问。",
        "第一问：先画出 x–t 图。对 x 求导，v = 3t² − 12t + 9，分解成 3(t − 1)(t − 3)。",
        "再对 v 求导：a = 6t − 12。",
        "三张图上下对齐，共用一根时间轴。游标走到哪里，质点就按 x(t) 走到哪里。",
        "第二问：静止就是 v 等于零，t 等于 1 秒和 3 秒。",
        "这两个时刻，x–t 图 的切线水平，质点停下、掉头。",
        "第三问：v 小于零就向左运动，也就是 1 到 3 秒；这段时间 x–t 图 在下降。",
        "第四问：让质点再走一遍。位移只看首末：x(4) − x(0)，等于 4 米。",
        "路程要在掉头处分段：去 4 米，回 4 米，再去 4 米，一共 12 米。",
        "第五问：何时加速、何时减速？注意，1 到 2 秒内加速度是负的，它在减速吗？",
        "判断标准：v 和 a 同号就加速，异号就减速。",
        "v 在 1 秒和 3 秒变号，a 在 2 秒变号，把时间切成四段。",
        "0 到 1 秒，v 正 a 负，减速；1 到 2 秒，两个都是负的，加速；",
        "2 到 3 秒，v 负 a 正，减速；3 到 4 秒，两个都是正的，加速。",
        "看质点：两个箭头同向时，速度箭头越拉越长；反向时，越缩越短。",
        "所以 1 到 2 秒，加速度虽然是负的，质点却越跑越快：加速度为负，不等于减速！"
       ]
      },
      {
       "title": "③ 例题 2：已知 a(t)，积分",
       "lines": [
        "例题二：已知 a = 6t，初速度是负 3 米每秒，初位置是 2 米。求速度和位置的表达式，以及 2 秒时的速度和位置。",
        "这次反过来，从 a 往回积分：v 等于 a 对 t 的积分，也就是 3t² + C。",
        "C 是多少？光靠积分定不出来：每个 C 对应一条曲线，形状相同，只是上下平移。",
        "初始条件挑出其中一条：t 等于 0 时 v 等于负 3，所以 C 等于负 3，v = 3t² − 3。",
        "再积分一次，x = t³ − 3t + C′；由初位置 2 米，得 C′ = 2。",
        "代入 t 等于 2 秒：v 等于 9 米每秒，x 等于 4 米。",
        "用面积检验：a–t 图 下 0 到 2 秒的面积是 12，正好等于速度的变化，从负 3 到 9。",
        "记住：不定积分一定要加常数，并用初始条件定出来；丢了它，答案就错了。"
       ]
      },
      {
       "title": "总结",
       "lines": [
        "最后总结。",
        "求导看斜率：v 是 x 的导数，a 是 v 的导数；积分看面积，常数由初始条件定。",
        "v 和 a 同号加速，异号减速；路程要在掉头处分段累加。",
        "我们下期再见！"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/11-kinematics-with-calculus.mp4",
     "poster": "posters/en/11-kinematics-with-calculus.jpg",
     "duration": 315.6,
     "chapters": [
      {
       "t": 0.0,
       "title": "① x, v, a and calculus"
      },
      {
       "t": 62.73,
       "title": "② Example 1: given x(t)"
      },
      {
       "t": 209.5,
       "title": "③ Example 2: given a(t), integrate"
      },
      {
       "t": 288.6,
       "title": "Summary"
      }
     ],
     "transcript": [
      {
       "title": "① x, v, a and calculus",
       "lines": [
        "This episode is about how derivatives and integrals link position, velocity, and acceleration.",
        "A particle moves along a number line, and below it we draw its x–t graph in sync.",
        "At any instant, the slope of the x–t graph is the velocity: v = dx/dt.",
        "Record the slope at every instant, and you get the v–t graph. The slope goes positive, zero, negative: the particle moves right, stops, then moves left.",
        "The slope of the v–t graph is the acceleration, a = dv/dt, here a constant −2 m/s².",
        "So differentiate x to get v, and v to get a: derivatives mean slopes.",
        "Going back, integrate a to get v, and v to get x: integrals mean areas. Each time you integrate, an initial condition pins down the constant."
       ]
      },
      {
       "title": "② Example 1: given x(t)",
       "lines": [
        "Example 1: A particle on the x-axis has x = t³ − 6t² + 9t, from 0 to 4 seconds. There are five parts.",
        "Part (a): differentiate x to get v = 3t² − 12t + 9, which factors as 3(t − 1)(t − 3).",
        "Differentiate again: a = 6t − 12.",
        "The three graphs are stacked on one shared time axis. Wherever the cursor goes, the particle moves to x(t).",
        "Part (b): at rest means v equals zero: t equals 1 and 3 seconds.",
        "At those instants, the x–t graph has a horizontal tangent: the particle stops and turns around.",
        "Part (c): v less than zero means moving left, from 1 to 3 seconds. Over that interval, the x–t graph is going down.",
        "Part (d): let's run the particle again. Displacement depends only on the start and end: x(4) − x(0), which is 4 meters.",
        "For distance, split at each turnaround: 4 meters out, 4 back, 4 out again, 12 meters total.",
        "Part (e): when is it speeding up or slowing down? From 1 to 2 seconds, the acceleration is negative. Is it slowing down?",
        "The rule: if v and a have the same sign, it speeds up, and if opposite, it slows down.",
        "v changes sign at 1 and 3 seconds, and a at 2 seconds, making four intervals.",
        "From 0 to 1, v is positive, a negative: slowing down. From 1 to 2, both are negative: speeding up.",
        "From 2 to 3, v is negative, a positive: slowing down. From 3 to 4, both are positive: speeding up.",
        "Watch the particle: when the arrows point the same way, the velocity arrow grows, and when opposite, it shrinks.",
        "So from 1 to 2 seconds, a is negative, yet the particle gets faster. Negative acceleration does not mean slowing down!"
       ]
      },
      {
       "title": "③ Example 2: given a(t), integrate",
       "lines": [
        "Example 2: a = 6t, with initial velocity −3 m/s and initial position 2 m. Find v(t) and x(t), and their values at 2 seconds.",
        "This time we integrate: v is the integral of a dt, which is 3t² + C.",
        "What is C? Integration alone can't tell you: each C gives the same curve, shifted up or down.",
        "The initial condition picks one: v(0) = −3, so C = −3, and v = 3t² − 3.",
        "Integrate again: x = t³ − 3t + C′. Then x(0) = 2 gives C′ = 2.",
        "At t equals 2 seconds, v is 9 meters per second, and x is 4 meters.",
        "Check with area: from 0 to 2 seconds, the area under the a–t graph is 12. That's exactly the change in velocity, from negative 3 to 9.",
        "Remember: an indefinite integral needs a constant, set by initial conditions. Drop it, and your answer is wrong."
       ]
      },
      {
       "title": "Summary",
       "lines": [
        "Let's sum up.",
        "Derivatives mean slopes: v is dx/dt, and a is dv/dt. Integrals mean areas, plus a constant from initial conditions.",
        "Same signs for v and a mean speeding up, opposite signs mean slowing down. For distance, split at each turnaround and add.",
        "See you next time!"
       ]
      }
     ]
    }
   }
  },
  "12": {
   "num": "12",
   "slug": "12-motion-graphs",
   "title": {
    "zh": "运动图像",
    "en": "Motion Graphs"
   },
   "problems": {
    "zh": "分段 v–t 图：各段 a、位移 76 m vs 路程 84 m、何时最远；三图同轴",
    "en": "A piecewise v–t graph: each a, displacement 76 m vs. distance 84 m, when it is farthest; three graphs on one time axis"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/12-motion-graphs.mp4",
     "poster": "posters/zh/12-motion-graphs.jpg",
     "duration": 271.4,
     "chapters": [
      {
       "t": 0.0,
       "title": "① 读图的四条规则"
      },
      {
       "t": 45.83,
       "title": "② 例题：分段的 v–t 图"
      },
      {
       "t": 128.73,
       "title": "③ 同一条时间轴：x–t、v–t、a–t"
      },
      {
       "t": 210.03,
       "title": "④ 三个常见陷阱"
      },
      {
       "t": 250.2,
       "title": "总结"
      }
     ],
     "transcript": [
      {
       "title": "① 读图的四条规则",
       "lines": [
        "这一集讲运动图像：位置、速度、加速度随时间变化的三种图。",
        "只要记住四条规则。",
        "第一，x–t 图上切线的斜率，就是这一刻的速度 v：切线往上倾，v 为正；往下倾，v 为负。",
        "第二，v–t 图的斜率是加速度 a。",
        "第三，v–t 图下的面积是位移 Δx；t 轴下方的面积算负。",
        "第四，a–t 图下的面积是速度的变化量 Δv。",
        "斜率对应求导，面积对应积分，和上一集完全一致。"
       ]
      },
      {
       "title": "② 例题：分段的 v–t 图",
       "lines": [
        "例题：小车沿直线运动，v–t 图由三段直线组成。",
        "求各段加速度、位移和路程、何时离出发点最远，并画出 x–t 和 a–t 图。",
        "先看斜率。0 到 4 秒，速度从 0 升到 8 米每秒，a 等于 8 除以 4，2 m/s²。",
        "4 到 10 秒是水平线，斜率为 0，a 等于 0。",
        "10 到 16 秒，从 8 降到负 4，a 等于负 12 除以 6，负 2 m/s²。",
        "再看面积。速度每秒减少 2，从 8 降到 0 需要 4 秒，所以 v 在 14 秒时过零。",
        "按 v 的正负切块：16、48、16，t 轴下方这一小块是负 4。",
        "位移是代数和：76 米。",
        "路程不管方向，取绝对值相加：84 米。",
        "平均速度是 76 除以 16，等于 4.75 米每秒；平均速率是 84 除以 16，等于 5.25 米每秒。",
        "平均速度用位移，平均速率用路程，别混。"
       ]
      },
      {
       "title": "③ 同一条时间轴：x–t、v–t、a–t",
       "lines": [
        "把 x–t 图和 a–t 图画在同一条时间轴上，上方的小车按这个 v–t 图真实运动。",
        "小车从 x 等于 0 出发，所以任一时刻的 x，就是 v 图下到这一刻为止的面积。",
        "0 到 4 秒，v 均匀增大，x 越涨越快，曲线向上弯，是抛物线，到 16 米。",
        "4 到 10 秒匀速，x 是斜率为 8 的直线，到 64 米；a 等于 0。",
        "10 秒后减速，曲线向下弯；14 秒时 v 等于 0，切线水平，x 达到最大 80 米。",
        "之后 v 变负，小车倒车，x 回落到 76 米。",
        "所以 (c)：离出发点最远，是在 v 由正变负的 14 秒，距离 80 米。",
        "对照 (b)：终点 76 米就是位移；先向前 80 米，再倒回 4 米，路程是 84 米。",
        "(d)，a–t 图是三段水平线：2、0、负 2。",
        "它下面的面积就是速度的变化：2 乘 4 等于 8，负 2 乘 6 等于负 12，和 v–t 图完全吻合。"
       ]
      },
      {
       "title": "④ 三个常见陷阱",
       "lines": [
        "最后看三个常见陷阱。",
        "第一，v 等于 0 不代表 a 等于 0。竖直上抛到最高点，v 为零，但斜率仍是负 g。",
        "第二，两车 x–t 图的交点表示相遇；",
        "v–t 图的交点只表示速度相同，追及问题里，这时两车距离最大或最小。",
        "第三，x–t 图往下走，不等于减速。看斜率的大小：越来越陡，就是在加速；",
        "越来越平缓，才是减速。"
       ]
      },
      {
       "title": "总结",
       "lines": [
        "总结：斜率由 x 到 v 再到 a；面积由 a 得到 Δv，由 v 得到 Δx。",
        "v 过零变号的时刻，位移达到极值；路程是各段面积绝对值之和。",
        "我们下一集见！"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/12-motion-graphs.mp4",
     "poster": "posters/en/12-motion-graphs.jpg",
     "duration": 293.3,
     "chapters": [
      {
       "t": 0.0,
       "title": "① Four rules for reading graphs"
      },
      {
       "t": 47.17,
       "title": "② Example: a piecewise v–t graph"
      },
      {
       "t": 140.53,
       "title": "③ One time axis: x–t, v–t, a–t"
      },
      {
       "t": 229.97,
       "title": "④ Three common traps"
      },
      {
       "t": 271.27,
       "title": "Summary"
      }
     ],
     "transcript": [
      {
       "title": "① Four rules for reading graphs",
       "lines": [
        "This episode is about motion graphs: position, velocity, and acceleration versus time.",
        "You only need four rules.",
        "Rule one: the slope of the tangent on an x–t graph is the velocity at that instant. Tilted up, v is positive, and tilted down, v is negative.",
        "Rule two: the slope of a v–t graph is the acceleration a.",
        "Rule three: the area under a v–t graph is the displacement Δx, and area below the t-axis counts as negative.",
        "Rule four: the area under an a–t graph is the change in velocity, Δv.",
        "Slope means derivative, and area means integral, just like last episode."
       ]
      },
      {
       "title": "② Example: a piecewise v–t graph",
       "lines": [
        "Example: a cart moves in a straight line, and its v–t graph has three straight segments.",
        "Find each acceleration, the displacement and distance, when it's farthest from the start, and sketch the x–t and a–t graphs.",
        "First, slopes: from 0 to 4 seconds, v rises from 0 to 8, so a is 8 over 4, or 2 m/s².",
        "From 4 to 10 seconds the line is flat, so a equals 0.",
        "From 10 to 16 seconds, v drops from 8 to negative 4, so a is negative 12 over 6, or negative 2 m/s².",
        "Now, areas: v drops by 2 each second, so it goes from 8 to 0 in 4 seconds, crossing zero at 14 seconds.",
        "Cut the area where v changes sign: 16, 48, 16, and this small piece below the axis is negative 4.",
        "Displacement is the signed sum: 76 meters.",
        "Distance ignores direction, so add the absolute values: 84 meters.",
        "Average velocity is 76 over 16, or 4.75 meters per second; average speed is 84 over 16, or 5.25 meters per second.",
        "Average velocity uses displacement, average speed uses distance: don't mix them up."
       ]
      },
      {
       "title": "③ One time axis: x–t, v–t, a–t",
       "lines": [
        "Now line up the x–t and a–t graphs on one time axis, with the cart moving exactly as the v–t graph says.",
        "The cart starts at x equals 0, so its position at any moment is the area under the v graph so far.",
        "From 0 to 4 seconds, v grows steadily, so x climbs faster and faster: a parabola bending up, to 16 meters.",
        "From 4 to 10 seconds, v is constant: x is a straight line with slope 8, up to 64 meters, and a is 0.",
        "After 10 seconds the cart slows down, and the curve bends downward. At 14 seconds, v equals 0, the tangent is flat, and x peaks at 80 meters.",
        "After that, v turns negative, the cart backs up, and x falls back to 76 meters.",
        "So, (c): the cart is farthest from start at 14 seconds, when v switches from positive to negative: 80 meters.",
        "Check (b): the final 76 meters is the displacement. Going 80 forward and 4 back makes the distance 84 meters.",
        "(d): the a–t graph is three flat lines at 2, 0, and negative 2.",
        "The area under it is the change in velocity: 2 times 4 is 8, and negative 2 times 6 is negative 12. That matches the v–t graph exactly."
       ]
      },
      {
       "title": "④ Three common traps",
       "lines": [
        "Finally, three common traps.",
        "First: v equals 0 does not mean a equals 0. At the top of a vertical throw, v is zero, but the slope is still negative g.",
        "Second: where two cars' x–t graphs cross, the cars meet.",
        "Where their v–t graphs cross, they only have the same velocity. In a chase problem, that's when the gap is largest or smallest.",
        "Third: an x–t graph heading down does not mean slowing down. Look at the steepness: if it gets steeper, the object is speeding up.",
        "Only if it gets flatter is it slowing down."
       ]
      },
      {
       "title": "Summary",
       "lines": [
        "To sum up: slopes take you from x to v to a. Areas take you from a to Δv, and from v to Δx.",
        "When v crosses zero and changes sign, x reaches a max or min. Distance is the sum of the absolute values of the areas.",
        "See you in the next episode!"
       ]
      }
     ]
    }
   }
  },
  "13": {
   "num": "13",
   "slug": "13-uniform-acceleration-and-free-fall",
   "title": {
    "zh": "匀加速与自由落体",
    "en": "Uniform Acceleration and Free Fall"
   },
   "problems": {
    "zh": "刹车；悬崖上抛（负根舍去）；追及（最大距离 96 m）",
    "en": "Braking; a ball thrown up from a cliff (reject the negative root); a car chase (max gap 96 m)"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/13-uniform-acceleration-and-free-fall.mp4",
     "poster": "posters/zh/13-uniform-acceleration-and-free-fall.jpg",
     "duration": 320.6,
     "chapters": [
      {
       "t": 0.0,
       "title": "① 四个公式从哪来"
      },
      {
       "t": 49.1,
       "title": "② 例题 1：刹车"
      },
      {
       "t": 98.1,
       "title": "③ 例题 2：悬崖上抛"
      },
      {
       "t": 207.93,
       "title": "④ 例题 3：追及"
      },
      {
       "t": 289.0,
       "title": "总结"
      }
     ],
     "transcript": [
      {
       "title": "① 四个公式从哪来",
       "lines": [
        "这一集讲匀加速直线运动：四个公式，三道典型题。",
        "加速度 a 恒定时，对时间积分一次：v 等于 v0 加 a t。",
        "v–t 图是一条直线，斜率就是 a。",
        "位移就是图线下的面积：矩形 v0 t，加上三角形二分之一 a t 平方。",
        "整块梯形一起算：Δx 等于 v0 和 v 的平均值乘以 t。",
        "由第一、第三式消去 t，得到 v 平方等于 v0 平方加 2 a Δx。",
        "一共五个量，每个公式恰好缺一个。",
        "口诀：题目没给、也不问的那个量，就用缺它的公式。"
       ]
      },
      {
       "title": "② 例题 1：刹车",
       "lines": [
        "例题一：汽车以 20 米每秒行驶，刹车后滑行 40 米停下。求加速度和刹车时间。",
        "先看刹车过程：速度均匀减小，每秒滑过的距离越来越短。",
        "已知 Δx 等于 40 米、v0 等于 20、v 等于 0，求 a。",
        "t 没给也不问，就用缺 t 的公式。",
        "0 等于 20 的平方加 2 a 乘 40，得 a 等于负 5.0 m/s²。",
        "负号表示加速度与速度反向。",
        "再由 v 等于 v0 加 a t，得 t 等于 4.0 秒，正好对上画面上的 4 秒。"
       ]
      },
      {
       "title": "③ 例题 2：悬崖上抛",
       "lines": [
        "例题二：从 20 米高的悬崖边，以 15 米每秒竖直向上抛出一个球。求最高点比崖顶高多少、多久落地、落地速度多大。",
        "取向上为正、崖顶为原点；加速度始终是负 9.8 米每二次方秒。",
        "(a)：球上升时不断减速，同步画出 y–t 图和 v–t 图。",
        "到了最高点，速度为零；但加速度仍是负 9.8，不是零！",
        "没有 t，就用 v 平方公式：0 等于 15 的平方减 2 乘 9.8 乘 h，h 约 11.5 米。",
        "用时约 1.53 秒，正是 v–t 图穿过零的地方。",
        "(b)：落地时，球的位移是负 20 米，不是正 20。",
        "代入位移公式，整理成 4.9t² − 15t − 20 = 0。",
        "两个根：4.07 秒和负 1.00 秒。",
        "负根是抛出之前的时刻，没有物理意义，舍去。",
        "回到崖顶时，t 约 3.06 秒，速度是向下 15 米每秒，和上抛时对称。",
        "再过大约 1 秒，球落地。",
        "(c)：v 等于 15 减 9.8 乘 4.07，约负 24.8，即向下 24.8 米每秒。",
        "也可以用 v 平方公式检验：15 的平方加 2 乘负 9.8 乘负 20，等于 617，开方也是 24.8。",
        "v–t 图始终是一条斜率负 9.8 的直线，穿过零点也不拐弯。"
       ]
      },
      {
       "title": "④ 例题 3：追及",
       "lines": [
        "例题三：B 车以 24 米每秒匀速驶过静止的 A 车，同一瞬间 A 以 3.0 m/s² 起步追赶。何时追上？追上前最大距离多少？",
        "A 的位置是二分之一 a t 平方，即 1.5 t 平方；B 的位置是 24 t。",
        "开始时 B 比 A 快，两车距离越拉越大。",
        "8 秒时两车速度相等，距离最大，96 米。",
        "之后 A 比 B 快，距离不断缩小，直到追上。",
        "追上，就是位置相等：1.5 t 平方等于 24 t，t 等于 16 秒，在 384 米处。",
        "这时 A 的速度是 48 米每秒，正好是 B 的两倍。",
        "距离最大，就是速度相等：3.0 t 等于 24，t 等于 8 秒，最大距离 96 米。",
        "v–t 图上两块三角形面积都是 96 米：先被拉开，再追回来。",
        "记住：x–t 图的交点是追上；v–t 图的交点是速度相等，距离最大。"
       ]
      },
      {
       "title": "总结",
       "lines": [
        "最后总结。",
        "四个公式各缺一个量：没给、也不问的那个量，就用缺它的公式。",
        "竖直上抛：a 等于负的重力加速度，全程不变，最高点也一样。",
        "二次方程解出两个根，要按物理意义取舍。",
        "追及问题：位置相等是追上；速度相等时，距离最大或最小。",
        "我们下一集见！"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/13-uniform-acceleration-and-free-fall.mp4",
     "poster": "posters/en/13-uniform-acceleration-and-free-fall.jpg",
     "duration": 344.3,
     "chapters": [
      {
       "t": 0.0,
       "title": "① Where the four equations come from"
      },
      {
       "t": 53.33,
       "title": "② Example 1: Braking"
      },
      {
       "t": 105.13,
       "title": "③ Example 2: Thrown up from a cliff"
      },
      {
       "t": 225.03,
       "title": "④ Example 3: Catching up"
      },
      {
       "t": 313.67,
       "title": "Summary"
      }
     ],
     "transcript": [
      {
       "title": "① Where the four equations come from",
       "lines": [
        "This episode: motion with constant acceleration, four equations, and three classic problems.",
        "With constant a, integrate once over time: v equals v0 plus a t.",
        "The v–t graph is a straight line, and its slope is a.",
        "The displacement is the area: a rectangle, v0 t, plus a triangle, one half a t squared.",
        "Or use the whole trapezoid: Δx is the average of v0 and v, times t.",
        "Eliminate t from equations one and three to get v squared equals v0 squared plus 2 a Δx.",
        "Five quantities, and each equation is missing exactly one.",
        "The rule: find the quantity that's neither given nor asked for, and use the equation missing it."
       ]
      },
      {
       "title": "② Example 1: Braking",
       "lines": [
        "Example 1: a car at 20 meters per second brakes and skids 40 meters to a stop. Find the acceleration and braking time.",
        "First, watch the braking: the speed drops steadily, covering less ground each second.",
        "We know Δx is 40 meters, v0 is 20, and v is 0, and we want a.",
        "Time is neither given nor asked for, so use the equation without t.",
        "0 equals 20 squared plus 2 a times 40, so a equals negative 5.0 m/s².",
        "The negative sign means a points opposite to v.",
        "Then v equals v0 plus a t gives t equals 4.0 seconds, matching the 4 seconds on screen."
       ]
      },
      {
       "title": "③ Example 2: Thrown up from a cliff",
       "lines": [
        "Example 2: from the edge of a 20 meter cliff, a ball is thrown straight up at 15 meters per second. How high does it rise, when does it land, and how fast is it going then?",
        "Take up as positive and the cliff top as the origin, so a is always negative 9.8 m/s².",
        "(a): on the way up, the ball keeps slowing down, as we plot the y–t and v–t graphs.",
        "At the top, v is zero, but a is still negative 9.8, not zero!",
        "With no t, use the v squared equation: 0 equals 15 squared minus 2 times 9.8 times h, so h is about 11.5 meters.",
        "That takes about 1.53 seconds, right where the v–t graph crosses zero.",
        "(b): at landing, the displacement is negative 20 meters, not positive 20.",
        "Plug into the displacement equation: 4.9t² − 15t − 20 = 0.",
        "Two roots: 4.07 seconds and negative 1.00 second.",
        "The negative root is a time before the throw, with no physical meaning, so we drop it.",
        "Back at the cliff top at about 3.06 seconds, it moves down at 15 meters per second, mirroring the throw.",
        "About one second later, the ball hits the ground.",
        "(c): v is 15 minus 9.8 times 4.07, about negative 24.8, or 24.8 meters per second downward.",
        "Check with v squared: 15 squared plus 2 times negative 9.8 times negative 20 is 617, whose root is 24.8.",
        "The v–t graph is one straight line of slope negative 9.8, passing through zero without bending."
       ]
      },
      {
       "title": "④ Example 3: Catching up",
       "lines": [
        "Example 3: car B passes stopped car A at 24 meters per second, just as car A starts chasing at 3.0 m/s². How long until A catches B, and what is the largest gap before then?",
        "A's position is one half a t squared, or 1.5 t squared, and B's is 24 t.",
        "At first, B is faster than A, so the gap keeps growing.",
        "At 8 seconds the speeds are equal, and the gap is largest: 96 meters.",
        "After that, A is faster, and the gap shrinks until A catches B.",
        "Catching up means equal positions: 1.5 t squared equals 24 t, so t is 16 seconds, at 384 meters.",
        "A is then going 48 meters per second, twice B's speed.",
        "The gap is largest at equal velocities: 3.0 t equals 24, so t is 8 seconds, and the gap is 96 meters.",
        "On the v–t graph, both triangles have area 96 meters: the gap opens up, then A wins it back.",
        "Remember: where the x–t graphs cross, A catches B. Where the v–t graphs cross, the velocities are equal and the gap is largest."
       ]
      },
      {
       "title": "Summary",
       "lines": [
        "Let's wrap up.",
        "Each equation is missing one quantity. Find the one that's neither given nor asked for, and use the equation without it.",
        "For a vertical throw, a is negative g the whole way, even at the top.",
        "A quadratic gives two roots, so keep the one that makes physical sense.",
        "In a chase, equal x means caught up, and equal v means the gap is largest or smallest.",
        "See you in the next episode!"
       ]
      }
     ]
    }
   }
  },
  "14": {
   "num": "14",
   "slug": "14-projectile-motion",
   "title": {
    "zh": "抛体运动",
    "en": "Projectile Motion"
   },
   "problems": {
    "zh": "水平抛出；30° 斜抛；互余角射程相同；单位矢量写 r(t)、v(t)",
    "en": "Horizontal launch; a 30° launch; complementary angles give equal range; r(t) and v(t) in unit vectors"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/14-projectile-motion.mp4",
     "poster": "posters/zh/14-projectile-motion.jpg",
     "duration": 329.2,
     "chapters": [
      {
       "t": 0.0,
       "title": "开场"
      },
      {
       "t": 48.93,
       "title": "① 例题 1：水平抛出"
      },
      {
       "t": 107.07,
       "title": "② 例题 2：斜抛"
      },
      {
       "t": 211.47,
       "title": "③ 例题 3：单位矢量写法"
      },
      {
       "t": 297.16,
       "title": "总结"
      }
     ],
     "transcript": [
      {
       "title": "开场",
       "lines": [
        "这一集讲抛体运动。",
        "问题一：同一高度，一个球自由下落，一个球水平抛出。谁先落地？",
        "放手！画面慢放 5 倍，每隔 0.1 秒留下一个残影。",
        "每一个时刻，两个球都在同一高度，所以同时落地。",
        "水平方向，残影的间距相等：不受力，匀速运动，ax 等于零。",
        "竖直方向，只受重力，和旁边自由下落的球一模一样，ay 等于负 g。",
        "两个方向互不干扰，把它们连起来的，是同一个时间 t。"
       ]
      },
      {
       "title": "① 例题 1：水平抛出",
       "lines": [
        "例题一：小球以 3.0 米每秒，从 1.25 米高的桌边水平滚出。求落地时间、水平距离和落地速度。",
        "先看竖直方向：初速度为零，就是自由落体。1.25 等于二分之一 g t 平方，解得 t 约 0.505 秒。",
        "水平方向匀速：x 等于 3.0 乘 0.505，约 1.52 米。",
        "看它飞出去：vx 始终是 3.0，箭头长度不变；vy 等于 g t，均匀变长。",
        "落地时，vy 等于 9.8 乘 0.505，约 4.95 米每秒，方向向下。",
        "合速度用勾股定理，约 5.79 米每秒；方向在水平线下方 58.8 度。"
       ]
      },
      {
       "title": "② 例题 2：斜抛",
       "lines": [
        "例题二：以 20 米每秒、与水平成 30 度的方向抛出，落回同一水平面。求飞行时间、最大高度和射程。",
        "先分解初速度：vx 等于 20 cos30°，约 17.3 米每秒；竖直初速度等于 20 sin30°，等于 10 米每秒。",
        "上升时，vy 每秒减少 9.8，越来越短；到最高点，vy 等于零。",
        "注意：最高点的速度并不是零，还剩水平的 17.3 米每秒；加速度仍然是 g，向下。",
        "上升用时 10 除以 9.8，约 1.02 秒；上下对称，飞行时间约 2.04 秒。",
        "最大高度等于竖直初速度的平方除以 2g，约 5.10 米。",
        "再落回地面。射程等于 vx 乘飞行时间：17.3 乘 2.04，约 35.3 米。",
        "把 vx 和 T 代进去，化简得到平地的射程公式：R 等于 v0² sin2θ / g。",
        "同样 20 米每秒，换五个角度看看。",
        "30 度和 60 度落在同一点，15 度和 75 度也是：互余的两个角，射程相同。",
        "45 度时 sin2θ 等于 1，射程最远，约 40.8 米。但要注意，这个公式只适用于起点和落点等高的情况。"
       ]
      },
      {
       "title": "③ 例题 3：单位矢量写法",
       "lines": [
        "例题三，AP C 常用单位矢量：小球从 10 米高处，以 (12i + 16j) m/s 的初速度抛出。写出 r(t) 和 v(t)，再求落地时间、落地点和落地速度。",
        "x 方向匀速：x 等于 12 t。y 方向从 10 米出发，初速度 16，加速度负 9.8：y 等于 10 加 16 t 减 4.9 t 平方。",
        "把两个分量合起来，就是位置矢量 r(t)。",
        "对时间求导得到速度 v(t)；再求导，加速度只剩 −9.8j，竖直向下。",
        "看动画：r 从原点指向小球；v 沿轨迹切线，水平分量不变，竖直分量均匀减小。",
        "1.63 秒时竖直速度为零，到达最高点，约 23.1 米。",
        "落地时 y 等于零：4.9 t 平方减 16 t 减 10 等于零，取正根，t 约 3.80 秒。",
        "落地点 x 等于 12 乘 3.80，约 45.6 米。",
        "把 t 代入 v(t)：落地速度是 12i − 21.3j 米每秒，速率约 24.4 米每秒。"
       ]
      },
      {
       "title": "总结",
       "lines": [
        "最后总结。",
        "水平方向 ax 等于零，匀速；竖直方向 ay 等于负 g，自由落体。",
        "两个方向用同一个时间 t 连起来。",
        "最高点竖直速度为零，但速度不为零；射程公式只适用于平地。",
        "用单位矢量写出 r(t)，对时间求导就得到 v(t)。"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/14-projectile-motion.mp4",
     "poster": "posters/en/14-projectile-motion.jpg",
     "duration": 355.5,
     "chapters": [
      {
       "t": 0.0,
       "title": "Intro"
      },
      {
       "t": 48.7,
       "title": "① Example 1: Horizontal Launch"
      },
      {
       "t": 113.3,
       "title": "② Example 2: Launch at an Angle"
      },
      {
       "t": 227.63,
       "title": "③ Example 3: Unit-Vector Notation"
      },
      {
       "t": 326.43,
       "title": "Summary"
      }
     ],
     "transcript": [
      {
       "title": "Intro",
       "lines": [
        "In this episode: projectile motion.",
        "Question 1: From the same height, one ball is dropped and one is launched horizontally. Which one lands first?",
        "Let go! Slowed down 5 times, with a ghost every 0.1 seconds.",
        "At every instant, the two balls are at the same height, so they land together.",
        "Horizontally, the ghosts are evenly spaced: no force, constant velocity, ax equals zero.",
        "Vertically, only gravity acts, just like the dropped ball: ay equals negative g.",
        "The two directions are independent, linked only by the same time t."
       ]
      },
      {
       "title": "① Example 1: Horizontal Launch",
       "lines": [
        "Example 1: A ball rolls off a 1.25-meter-high table at 3.0 m/s. Find the landing time, the horizontal distance, and the landing velocity.",
        "Vertically, the initial velocity is zero, so it's free fall. 1.25 equals one half g t squared, so t is about 0.505 seconds.",
        "Horizontally, velocity is constant: x equals 3.0 times 0.505, about 1.52 meters.",
        "Watch it fly: vx stays at 3.0, so its arrow never changes; vy equals g t, growing steadily.",
        "At landing, vy is 9.8 times 0.505, about 4.95 m/s, downward.",
        "By Pythagoras, the speed is about 5.79 m/s, at 58.8 degrees below horizontal."
       ]
      },
      {
       "title": "② Example 2: Launch at an Angle",
       "lines": [
        "Example 2: A ball is launched at 20 m/s, 30 degrees above horizontal, and lands at the same height. Find the time of flight, maximum height, and range.",
        "Split the initial velocity: vx equals 20 cos30°, about 17.3 m/s. The vertical component is 20 sin30°, which is 10 m/s.",
        "On the way up, vy shrinks by 9.8 every second; at the top, it's zero.",
        "Careful: the velocity at the top is not zero. The horizontal 17.3 m/s remains, and the acceleration is still g, downward.",
        "The trip up takes 10 divided by 9.8, about 1.02 seconds; by symmetry, the time of flight is about 2.04 seconds.",
        "The maximum height is the initial vertical velocity squared over 2g, about 5.10 meters.",
        "Then it comes back down. The range is vx times the time of flight: 17.3 times 2.04, about 35.3 meters.",
        "Substitute vx and T and simplify: on level ground, R equals v0² sin2θ / g.",
        "Same 20 m/s, now try five different angles.",
        "30 and 60 degrees land at the same spot, and so do 15 and 75: complementary angles, same range.",
        "At 45 degrees, sin2θ equals 1: the maximum range, about 40.8 meters. But this formula only works when launch and landing heights are equal."
       ]
      },
      {
       "title": "③ Example 3: Unit-Vector Notation",
       "lines": [
        "Example 3 uses unit vectors: a ball is launched from 10 meters up at (12î + 16ĵ) m/s. Write r(t) and v(t), then find when and where it lands, and its landing velocity.",
        "In x, velocity is constant: x equals 12 t. In y, start at 10, initial velocity 16, acceleration negative 9.8: y equals 10 plus 16 t minus 4.9 t squared.",
        "Combine the two components into the position vector r(t).",
        "Take the time derivative to get the velocity v(t); differentiate again, and the acceleration is just −9.8ĵ, straight down.",
        "Watch: vector r points from the origin to the ball; vector v is tangent to the path: constant horizontal part, steadily shrinking vertical part.",
        "At 1.63 seconds, the vertical velocity is zero: the peak, about 23.1 meters up.",
        "Setting y equal to zero gives 4.9 t squared minus 16 t minus 10 equals zero. Taking the positive root, t is about 3.80 seconds.",
        "Landing point: x equals 12 times 3.80, about 45.6 meters.",
        "Plug t into v(t): the landing velocity is 12î − 21.3ĵ, a speed of about 24.4 m/s."
       ]
      },
      {
       "title": "Summary",
       "lines": [
        "To sum up.",
        "Horizontally, ax equals zero: constant velocity. Vertically, ay equals negative g: free fall.",
        "The same time t links the two directions.",
        "At the top, the vertical velocity is zero, but the velocity isn't. And the range formula is for level ground only.",
        "Write r(t) with unit vectors, and differentiate to get v(t)."
       ]
      }
     ]
    }
   }
  },
  "15": {
   "num": "15",
   "slug": "15-relative-motion",
   "title": {
    "zh": "相对运动",
    "en": "Relative Motion"
   },
   "problems": {
    "zh": "船过河（最短时间 vs 最短路程）；车里看雨",
    "en": "Crossing a river (shortest time vs. shortest path); rain seen from a moving car"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/15-relative-motion.mp4",
     "poster": "posters/zh/15-relative-motion.jpg",
     "duration": 269.8,
     "chapters": [
      {
       "t": 0.0,
       "title": "开场"
      },
      {
       "t": 59.07,
       "title": "例题 1  船头垂直河岸"
      },
      {
       "t": 127.43,
       "title": "例题 2  到达正对岸"
      },
      {
       "t": 193.03,
       "title": "例题 3  车里看雨"
      },
      {
       "t": 239.73,
       "title": "总结"
      }
     ],
     "transcript": [
      {
       "title": "开场",
       "lines": [
        "这一集讲相对运动：同一个物体，从不同的参考系看，速度不一样。",
        "机场的自动步道，对地 1.5 米每秒；站在上面不动，你也以 1.5 米每秒前进。",
        "顺着步道走，相对步道 1.0 米每秒。地面上的人看，你的速度是 1.5 加 1.0，等于 2.5 米每秒。",
        "反过来走呢？对地只剩 1.5 减 1.0，0.5 米每秒，方向还是向右。",
        "同向相加，反向相减，其实都是矢量相加。",
        "一般来说：A 对地面的速度，等于 A 对 B 的速度，加上 B 对地面的速度。",
        "写成下标，中间的两个 B 首尾相消，剩下 A 对 G。",
        "方向不同时，就把两个矢量首尾相接，画成三角形。"
       ]
      },
      {
       "title": "例题 1  船头垂直河岸",
       "lines": [
        "例题一：河宽 60 米，水流 3.0 米每秒向东。船相对水 4.0 米每秒，船头始终指向正北。",
        "求过河时间、被冲到下游多远，以及船对岸的速度。",
        "先画速度三角形：船对水 4.0 向北，接上水对岸 3.0 向东，合起来就是船对岸的速度。",
        "开船！船头一直朝北，船却沿着合速度，斜着过河。虚影是同一条船在静水中，两条船同时到达对岸。",
        "所以过河时间只看垂直河岸的分量：60 除以 4.0，等于 15 秒。",
        "这 15 秒里，水流把船往下游冲了 3.0 乘 15，等于 45 米。",
        "对岸速度是 3、4、5 直角三角形的斜边：5.0 米每秒。",
        "方向北偏东 36.9 度，正好是实际轨迹的方向。"
       ]
      },
      {
       "title": "例题 2  到达正对岸",
       "lines": [
        "例题二：同一条河，船头该朝哪个方向，才能到达正对岸？要多长时间？",
        "把船头往上游转，合速度就跟着往回摆。",
        "转到合速度正好指向正北，就能到达正对岸。",
        "这时船速向西的分量，正好抵消水流：4.0 sinθ = 3.0，θ 约 48.6 度，北偏西。",
        "对岸速度是另一条直角边：根号下 4 方减 3 方，约 2.65 米每秒。",
        "过河时间：60 除以 2.65，约 22.7 秒。船头斜向上游，船却笔直地开向对岸。",
        "对比一下：例题一船头垂直河岸，时间最短，15 秒，但走了 75 米。",
        "例题二路程最短，只有 60 米，却要 22.7 秒。",
        "最短时间和最短路程，不能同时做到。"
       ]
      },
      {
       "title": "例题 3  车里看雨",
       "lines": [
        "例题三：雨滴竖直下落 8.0 米每秒，汽车以 6.0 米每秒向右行驶。车里的人看到雨怎么落？",
        "站在地面上看，雨竖直落下，车向右开。",
        "坐进车里，车不动，路边的树往后退；雨也被带着往后跑，斜着扑向挡风玻璃。",
        "算一算：雨对车，等于雨对地面加上地面对车，也就是减去车对地面。",
        "8.0 向下，加上 6.0 向左，合成 10 米每秒。",
        "偏离竖直方向 36.9 度，从车的前方斜着打过来。"
       ]
      },
      {
       "title": "总结",
       "lines": [
        "总结：A 对地面的速度，等于 A 对 B 加上 B 对地面，按矢量相加，画成三角形来算。",
        "各方向独立计算：过河时间只看垂直河岸的分量。",
        "船头垂直河岸，时间最短；合速度垂直河岸，路程最短，前提是船速大于水速。",
        "下一集：牛顿定律与视重。"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/15-relative-motion.mp4",
     "poster": "posters/en/15-relative-motion.jpg",
     "duration": 288.1,
     "chapters": [
      {
       "t": 0.0,
       "title": "Intro"
      },
      {
       "t": 57.6,
       "title": "Example 1  Heading straight across"
      },
      {
       "t": 134.8,
       "title": "Example 2  Landing directly across"
      },
      {
       "t": 208.6,
       "title": "Example 3  Rain seen from a car"
      },
      {
       "t": 259.43,
       "title": "Summary"
      }
     ],
     "transcript": [
      {
       "title": "Intro",
       "lines": [
        "Relative motion: the same object has different velocities in different reference frames.",
        "An airport moving walkway goes 1.5 m/s relative to the ground. Stand still on it, and so do you.",
        "Now walk forward at 1.0 m/s relative to the walkway. From the ground, your speed is 1.5 plus 1.0: 2.5 m/s.",
        "Walk backward, and you only get 1.5 minus 1.0: 0.5 m/s, still to the right.",
        "Adding or subtracting, both are really vector addition.",
        "In general: A relative to ground equals A relative to B, plus B relative to ground.",
        "In the subscripts, the inner B's cancel, leaving A relative to G.",
        "If the directions differ, place the vectors tip to tail to form a triangle."
       ]
      },
      {
       "title": "Example 1  Heading straight across",
       "lines": [
        "Example 1: A 60-meter-wide river flows east at 3.0 m/s. A boat moves 4.0 m/s relative to the water, always heading due north.",
        "Find the crossing time, the downstream drift, and the boat's velocity relative to the shore.",
        "Draw the velocity triangle: boat relative to water, 4.0 north; plus water relative to shore, 3.0 east. The sum is the boat's velocity relative to the shore.",
        "Go! The bow points north, but the boat moves along the resultant, at an angle. The faint boat, in still water, reaches the far bank at the same time.",
        "So the crossing time uses only the velocity across the river: 60 divided by 4.0 is 15 seconds.",
        "Meanwhile, the current carries it 3.0 times 15, or 45 meters, downstream.",
        "The speed relative to the shore is the hypotenuse of a 3-4-5 triangle: 5.0 m/s.",
        "Its direction, 36.9 degrees east of north, matches the actual path."
       ]
      },
      {
       "title": "Example 2  Landing directly across",
       "lines": [
        "Example 2: Same river. Which way should the boat head to land directly across? And how long will it take?",
        "Turn the bow upstream, and the resultant velocity swings back.",
        "Once the resultant points due north, the boat will land directly across.",
        "Now the boat's westward component exactly cancels the current. 4.0 sinθ = 3.0, so θ is about 48.6 degrees west of north.",
        "The shore speed is the other leg: the square root of 4 squared minus 3 squared, about 2.65 m/s.",
        "Crossing time: 60 divided by 2.65, about 22.7 seconds. The bow angles upstream, but the boat goes straight across.",
        "Compare: Example 1 heads straight across, for the shortest time, 15 seconds, but travels 75 meters.",
        "Example 2 has the shortest path, 60 meters, but takes 22.7 seconds.",
        "You can't get the shortest time and the shortest path at once."
       ]
      },
      {
       "title": "Example 3  Rain seen from a car",
       "lines": [
        "Example 3: Rain falls straight down at 8.0 m/s, and a car drives right at 6.0 m/s. How does the rain fall, as seen from inside the car?",
        "From the ground, the rain falls straight down, and the car drives right.",
        "Inside the car, the car is at rest and the trees move backward; so does the rain, slanting toward the windshield.",
        "Rain relative to car equals rain relative to ground, plus ground relative to car. That last term is minus car relative to ground.",
        "8.0 down plus 6.0 to the left gives 10 m/s.",
        "It's 36.9 degrees from vertical, hitting the car from the front."
       ]
      },
      {
       "title": "Summary",
       "lines": [
        "To sum up: A relative to ground equals A relative to B plus B relative to ground, added tip to tail.",
        "Treat each direction separately: the crossing time uses only the velocity across the river.",
        "Head straight across for the shortest time; aim the resultant straight across for the shortest path, if the boat is faster than the current.",
        "Next episode: Newton's laws and apparent weight."
       ]
      }
     ]
    }
   }
  },
  "16": {
   "num": "16",
   "slug": "16-newtons-laws-and-apparent-weight",
   "title": {
    "zh": "牛顿定律与视重",
    "en": "Newton's Laws and Apparent Weight"
   },
   "problems": {
    "zh": "马拉车悖论；作用力/反作用力配对；电梯里的秤读数",
    "en": "The horse-and-cart paradox; action–reaction pairs; a scale reading in an elevator"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/16-newtons-laws-and-apparent-weight.mp4",
     "poster": "posters/zh/16-newtons-laws-and-apparent-weight.jpg",
     "duration": 296.4,
     "chapters": [
      {
       "t": 0.0,
       "title": "开场"
      },
      {
       "t": 62.17,
       "title": "① 牛顿第三定律的误区"
      },
      {
       "t": 136.23,
       "title": "② 例题：电梯里的视重"
      },
      {
       "t": 267.17,
       "title": "总结"
      }
     ],
     "transcript": [
      {
       "title": "开场",
       "lines": [
        "这一集讲牛顿三大定律，还有电梯里的视重。",
        "第一定律，也叫惯性定律：合力为零时，物体保持静止，或者匀速直线运动。冰面几乎没有摩擦，冰球每秒走过的距离都一样。",
        "第二定律：合力等于 m a。它是矢量式，加速度和合力同方向；x、y 每个方向分别成立。",
        "第三定律：A 推 B，B 也推 A。两个力等大、反向，作用在不同物体上。",
        "最后分清质量和重量。质量是惯性的大小，单位千克，到哪儿都不变。",
        "重量 W 等于 mg，是力，单位牛。60 千克的人在地球上重 588 牛；到了月球，只有约六分之一，大约 98 牛。"
       ]
      },
      {
       "title": "① 牛顿第三定律的误区",
       "lines": [
        "问题一：马拉车，车也拉马，两个力等大反向。那车为什么能动？",
        "马拉车的力，和车拉马的力，确实是一对作用力与反作用力，等大、反向。",
        "但它们作用在不同的物体上：一个在车上，一个在马上，不能相互抵消。",
        "车会不会加速，只看作用在车上的力：马的拉力大于地面的阻力，合力向前，车就加速。",
        "再看马：马蹄向后蹬地，地面给马一个向前的静摩擦力。它比车拉马的力大，马也加速。",
        "再看一个常见误区：书静止在桌上，重力 mg 和支持力 N 等大反向。它们是一对作用力与反作用力吗？",
        "不是！它们都作用在书上，种类也不同。它们相等，是因为书的加速度为零。",
        "mg 的反作用力，是书对地球的引力；N 的反作用力，是书对桌子的压力。"
       ]
      },
      {
       "title": "② 例题：电梯里的视重",
       "lines": [
        "(b)，加速上升：a 向上，N = 60 × 11.8，708 牛，感觉变重。",
        "匀速上升：a 等于零，读数又回到 588 牛，和静止时一样。",
        "快到顶了，开始减速：速度仍然向上，但 a 向下，读数变小。",
        "(c)，加速下降：N = 60 × 7.8，468 牛。",
        "匀速下降，588 牛。",
        "减速下降：速度向下，a 却向上！读数 708 牛。",
        "例题：60 千克的人站在电梯里的体重秤上。求秤的读数：静止或匀速时；以 2.0 米每二次方秒加速上升时；加速下降时；以及缆绳断了的时候。",
        "秤的读数，其实就是秤对人的支持力 N，叫做视重。",
        "人只受两个力：向上的 N，向下的 mg。取向上为正，N − mg = ma，所以 N = m(g + a)。",
        "(a)，静止或匀速：a 等于零，N 就等于 mg，588 牛。",
        "想一想：如果电梯向下运动、但在减速，读数比 588 牛大还是小？",
        "看两段橙色的线：一段速度向上，一段速度向下，斜率却都为正，读数都是 708 牛。",
        "所以，读数只取决于加速度，和速度方向无关。",
        "(d)：缆绳断了！",
        "人和秤一起自由落体：a 等于负 g，N 等于零，秤的读数为零，完全失重。",
        "但失重不是没有重力：mg 一直都在，只是秤不再托着人。"
       ]
      },
      {
       "title": "总结",
       "lines": [
        "最后总结。第二定律：合力等于 m a，每个方向分别成立。",
        "第三定律：一对力等大、反向、同种性质，作用在不同物体上，不能相互抵消。",
        "视重就是支持力：N = m(g + a)，a 向上为正。",
        "失重不是没有重力。我们下集见！"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/16-newtons-laws-and-apparent-weight.mp4",
     "poster": "posters/en/16-newtons-laws-and-apparent-weight.jpg",
     "duration": 329.0,
     "chapters": [
      {
       "t": 0.0,
       "title": "Intro"
      },
      {
       "t": 63.87,
       "title": "① Third-Law Misconceptions"
      },
      {
       "t": 144.1,
       "title": "② Example: Apparent Weight in an Elevator"
      },
      {
       "t": 297.9,
       "title": "Summary"
      }
     ],
     "transcript": [
      {
       "title": "Intro",
       "lines": [
        "This episode covers Newton's three laws, plus apparent weight in an elevator.",
        "First, the law of inertia: with zero net force, an object stays at rest, or moves at constant velocity. The ice is almost frictionless, so the puck covers the same distance every second.",
        "Second law: net force equals m a. It's a vector equation: a points along the net force, and it holds separately in x and y.",
        "Third law: if A pushes on B, B pushes back on A. The two forces are equal and opposite, and they act on different objects.",
        "Finally, don't mix up mass and weight. Mass measures inertia, in kilograms, and it's the same everywhere.",
        "Weight, W equals mg, is a force, measured in newtons. A 60 kilogram person weighs 588 N on Earth; on the Moon, only about a sixth of that, roughly 98 N."
       ]
      },
      {
       "title": "① Third-Law Misconceptions",
       "lines": [
        "Question 1: a horse pulls a cart, and the cart pulls back on the horse, equally hard and opposite. So how can the cart move at all?",
        "The horse pulling the cart and the cart pulling the horse really are an action-reaction pair. They are equal and opposite.",
        "But they act on different objects: one on the cart, one on the horse. So they can't cancel each other.",
        "Whether the cart accelerates depends only on the forces on the cart. The horse's pull beats the ground's resistance, so the net force is forward and it speeds up.",
        "Now the horse. Its hooves push back on the ground, so static friction from the ground pushes it forward. That's bigger than the cart's pull, so the horse speeds up too.",
        "Another common trap: a book rests on a table. Gravity, mg, and the normal force N are equal and opposite. Are they an action-reaction pair?",
        "No! Both act on the book, and they're different kinds of force. They're equal only because the book's acceleration is zero.",
        "The reaction to mg is the book's gravitational pull on Earth; the reaction to N is the book pushing down on the table."
       ]
      },
      {
       "title": "② Example: Apparent Weight in an Elevator",
       "lines": [
        "Part (b): going up and speeding up, so a points up. N = 60 × 11.8, or 708 N. You feel heavier.",
        "Constant speed upward: a is zero, so the reading is back to 588 N, same as at rest.",
        "Near the top, it slows down. The velocity is still up, but a points down, so the reading drops.",
        "Part (c): going down and speeding up. N = 60 × 7.8, or 468 N.",
        "Constant speed downward: 588 N.",
        "Slowing down on the way down: the velocity is down, but a points up! The reading is 708 N.",
        "Example: a 60 kilogram person stands on a scale in an elevator. Find the scale reading: at rest or at constant velocity; going up and speeding up at 2.0 m/s²; going down and speeding up; and when the cable snaps.",
        "The scale reading is really the normal force N from the scale on the person. We call it the apparent weight.",
        "Only two forces act on the person: N up, and mg down. Taking up as positive, N − mg = ma, so N = m(g + a).",
        "Part (a), at rest or constant velocity: a is zero, so N equals mg, 588 N.",
        "Think: if the elevator is moving down but slowing down, is the reading more or less than 588 N?",
        "Look at the two orange segments: in one the velocity is up, in the other it's down. But both slopes are positive, and both readings are 708 N.",
        "So the reading depends only on the acceleration, not on the direction of motion.",
        "Part (d): the cable snaps!",
        "The person and the scale fall together: a equals negative g, so N is zero. The scale reads zero, and the person feels weightless.",
        "But weightless doesn't mean no gravity: mg is still there. The scale just isn't holding the person up anymore."
       ]
      },
      {
       "title": "Summary",
       "lines": [
        "Let's sum up. Second law: net force equals m a, separately along each axis.",
        "Third law: the two forces in a pair are equal, opposite, and the same type. They act on different objects, so they never cancel.",
        "Apparent weight is the normal force: N = m(g + a), with up as positive.",
        "And weightless doesn't mean no gravity. See you in the next episode!"
       ]
      }
     ]
    }
   }
  },
  "17": {
   "num": "17",
   "slug": "17-tension-and-connected-objects",
   "title": {
    "zh": "张力与连接体",
    "en": "Tension and Connected Objects"
   },
   "problems": {
    "zh": "推两块木块（接触力）；拉一列木块；阿特伍德机",
    "en": "Pushing two blocks (contact force); a train of blocks; the Atwood machine"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/17-tension-and-connected-objects.mp4",
     "poster": "posters/zh/17-tension-and-connected-objects.jpg",
     "duration": 323.9,
     "chapters": [
      {
       "t": 0.0,
       "title": "开场"
      },
      {
       "t": 49.0,
       "title": "① 例题 1：推两块木块"
      },
      {
       "t": 126.1,
       "title": "② 例题 2：拉一列木块"
      },
      {
       "t": 184.47,
       "title": "③ 例题 3：阿特伍德机"
      },
      {
       "t": 291.8,
       "title": "总结"
      }
     ],
     "transcript": [
      {
       "title": "开场",
       "lines": [
        "这一集讲张力与连接体。",
        "轻绳有三个特点。第一，张力沿着绳子，处处相等。",
        "任意剪开一处，两边的拉力都是 T，也等于手上的拉力 F。",
        "第二，绳子只能拉，不能推：一推，它就软了，张力为零。",
        "第三，光滑的轻滑轮只改变张力的方向，不改变大小。",
        "解连接体有两种方法。整体法：把加速度相同的物体看成一个整体，内力互相抵消，用来求加速度。",
        "隔离法：单独拿出一个物体，用来求张力、接触力这些内力。"
       ]
      },
      {
       "title": "① 例题 1：推两块木块",
       "lines": [
        "例题 1：2.0 千克的 A 和 4.0 千克的 B 靠在一起，用 12 牛的力从左边推 A。求加速度和 A、B 间的作用力。",
        "先用整体法：A、B 一起加速，它们之间的推力是内力。a 等于 12 除以 6.0，等于 2.0 m/s²。",
        "再用隔离法，把 B 单独拿出来：水平方向，它只受 A 的推力 P。",
        "P 等于 B 的质量乘 a：4.0 乘 2.0，等于 8.0 牛。反过来，B 也用 8.0 牛把 A 往回推。",
        "检验 A：12 减 8.0，正好等于 2.0 乘 2.0。",
        "追问：如果改从右边推 B 呢？",
        "加速度还是 2.0，方向向左。现在被推着走的是 A：P 等于 2.0 乘 2.0，4.0 牛。",
        "规律：接触力等于被推着走的那部分质量乘以 a。推力加在哪一边，结果就不一样。"
       ]
      },
      {
       "title": "② 例题 2：拉一列木块",
       "lines": [
        "例题 2：1.0、2.0、3.0 千克的 A、B、C 用轻绳相连，用 18 牛向右拉 C。求加速度和两段绳子的张力。",
        "三块一起加速。整体法：绳子张力都是内力，a 等于 18 除以总质量 6.0，等于 3.0 m/s²。",
        "再看 B、C 之间这段绳子：它要拖着后面的 A 和 B 一起加速。",
        "框出来的质量是 3.0 千克，乘以 3.0，B、C 间的张力等于 9.0 牛。",
        "A、B 之间的绳子只拖着 A：1.0 乘 3.0，等于 3.0 牛。",
        "从拉力那端往后：18、9、3，越来越小，每段绳子只拖动它后面的质量。"
       ]
      },
      {
       "title": "③ 例题 3：阿特伍德机",
       "lines": [
        "例题 3，本集重点：阿特伍德机。轻绳跨过光滑轻滑轮，两端挂着 3.0 千克和 5.0 千克的物体，由静止释放。",
        "求加速度、张力，和 2.0 秒后各自移动的距离。",
        "两个物体一上一下，怎么用整体法？和第 6 集一样：把绳子拉直。",
        "想象把绳子从滑轮上展开，两个物体排成一条直线。",
        "沿着绳子方向，m₂g 往前拉，m₁g 往后拉；两段张力是内力，互相抵消。",
        "合力是两者之差 19.6 牛，总质量 8.0 千克，a 等于 2.45 m/s²。",
        "把绳子放回去，隔离 m₁：向上的 T 减去 m₁g，等于 m₁a。",
        "T 等于 3.0 乘以括号 9.8 加 2.45，约等于 36.8 牛。",
        "用 m₂ 检验：T 等于 5.0 乘以括号 9.8 减 2.45，也是 36.8 牛。",
        "想一想：T 为什么在 29.4 牛和 49 牛之间？",
        "m₁ 加速上升，拉力必须大于它的重力；m₂ 加速下降，拉力必须小于它的重力。T 只能夹在中间。",
        "最后，d 等于二分之一 a t 平方：二分之一乘 2.45，乘 2.0 的平方，等于 4.9 米。",
        "2.0 秒后，一个上升 4.9 米，一个下降 4.9 米。"
       ]
      },
      {
       "title": "总结",
       "lines": [
        "最后总结。",
        "轻绳的张力沿着绳子、处处相等，只能拉；光滑滑轮只改变方向。",
        "整体法求加速度，内力互相抵消。",
        "隔离法求张力：水平无摩擦时，它等于绳子拖着的那部分质量乘以 a。",
        "阿特伍德机：a 等于两质量之差乘 g，除以两质量之和。",
        "我们下集见！"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/17-tension-and-connected-objects.mp4",
     "poster": "posters/en/17-tension-and-connected-objects.jpg",
     "duration": 356.4,
     "chapters": [
      {
       "t": 0.0,
       "title": "Intro"
      },
      {
       "t": 54.6,
       "title": "① Example 1: Pushing Two Blocks"
      },
      {
       "t": 138.7,
       "title": "② Example 2: Pulling a Train of Blocks"
      },
      {
       "t": 202.43,
       "title": "③ Example 3: The Atwood Machine"
      },
      {
       "t": 323.3,
       "title": "Summary"
      }
     ],
     "transcript": [
      {
       "title": "Intro",
       "lines": [
        "This episode is about tension and connected objects.",
        "A light rope has three properties. First, the tension acts along the rope, and it's the same everywhere.",
        "Cut the rope anywhere: each side pulls with T, equal to the hand's pull F.",
        "Second, a rope can only pull, never push. Push it, and it goes slack: zero tension.",
        "Third, an ideal pulley changes the direction of the tension, but not its size.",
        "There are two ways to solve connected objects. The system method: objects with the same acceleration are treated as one body. Internal forces cancel, so this finds the acceleration.",
        "The isolation method: pull out one object by itself. This finds internal forces, like tension and contact forces."
       ]
      },
      {
       "title": "① Example 1: Pushing Two Blocks",
       "lines": [
        "Example 1: blocks A and B, 2.0 and 4.0 kilograms, sit side by side. A 12 N force pushes A from the left. Find the acceleration and the force between A and B.",
        "First, the system: A and B move together, so the push between them is internal. a equals 12 divided by 6.0, which is 2.0 m/s².",
        "Now isolate block B. Horizontally, the only force on it is the push P from A.",
        "P equals B's mass times a: 4.0 times 2.0, or 8.0 N. By the third law, B pushes back on A with 8.0 N.",
        "Check block A: 12 minus 8.0 equals 2.0 times 2.0.",
        "Follow-up question: what if we push B from the right?",
        "The acceleration is still 2.0, now to the left. Now A is the one pushed along: P equals 2.0 times 2.0, or 4.0 N.",
        "The rule: the contact force equals the mass being pushed along, times a. So the side you push on changes the answer."
       ]
      },
      {
       "title": "② Example 2: Pulling a Train of Blocks",
       "lines": [
        "Example 2: blocks of 1.0, 2.0, and 3.0 kilograms are tied in a row by light ropes. An 18 N force pulls C to the right. Find the acceleration and the tension in each rope.",
        "All three accelerate together. The rope tensions are internal, so a equals 18 over the total mass, 6.0: 3.0 m/s².",
        "The rope between B and C has to pull both A and B behind it.",
        "The boxed mass is 3.0 kilograms. Times 3.0, the tension between B and C is 9.0 N.",
        "The rope between A and B pulls only A: 1.0 times 3.0, or 3.0 N.",
        "From the pulling end back: 18, 9, 3, getting smaller. Each rope pulls only the mass behind it."
       ]
      },
      {
       "title": "③ Example 3: The Atwood Machine",
       "lines": [
        "Example 3: the Atwood machine. A light rope over a frictionless pulley holds 3.0 and 5.0 kilogram masses, released from rest.",
        "Find the acceleration, the tension, and how far each mass moves in 2.0 seconds.",
        "One goes up, one goes down: so how can we use the system method? Just like in Episode 6: straighten out the rope.",
        "Imagine unwrapping the rope from the pulley, so both masses line up.",
        "Along the rope, m₂g pulls forward and m₁g pulls back. The two tensions are internal forces, so they cancel.",
        "The net force is the difference, 19.6 N; the total mass is 8.0 kilograms. So a equals 2.45 m/s².",
        "Put the rope back and isolate m₁: T up, minus m₁g down, equals m₁a.",
        "T equals 3.0 times the quantity 9.8 plus 2.45, about 36.8 N.",
        "Check with m₂: 5.0 times the quantity 9.8 minus 2.45 is also 36.8 N.",
        "Think: why is T between 29.4 N and 49 N?",
        "m₁ accelerates upward, so the tension must be bigger than its weight; m₂ accelerates downward, so the tension must be smaller than its weight. T has to be in between.",
        "Finally, d equals one half a t squared: one half times 2.45 times 2.0 squared, or 4.9 m.",
        "After 2.0 seconds, one rises 4.9 m and the other drops 4.9 m."
       ]
      },
      {
       "title": "Summary",
       "lines": [
        "Let's sum up.",
        "A light rope's tension acts along the rope, is the same everywhere, and can only pull; an ideal pulley only changes its direction.",
        "The system method finds the acceleration: internal forces cancel.",
        "Isolate to find tension: on a flat, frictionless surface, it's the mass being pulled, times a.",
        "Atwood machine: a equals the difference of the masses times g, divided by their sum.",
        "See you in the next episode!"
       ]
      }
     ]
    }
   }
  },
  "18": {
   "num": "18",
   "slug": "18-drag-and-terminal-velocity",
   "title": {
    "zh": "阻力与终端速度",
    "en": "Drag and Terminal Velocity"
   },
   "problems": {
    "zh": "分离变量推 v(t)；终端速度与时间常数；小船滑行总距离 v₀τ",
    "en": "Deriving v(t) by separating variables; terminal velocity and the time constant; a boat's coasting distance v₀τ"
   },
   "langs": {
    "zh": {
     "video": "videos/zh/18-drag-and-terminal-velocity.mp4",
     "poster": "posters/zh/18-drag-and-terminal-velocity.jpg",
     "duration": 327.9,
     "chapters": [
      {
       "t": 0.0,
       "title": "① 阻力随速度增大"
      },
      {
       "t": 53.87,
       "title": "② 推导 v(t)"
      },
      {
       "t": 145.87,
       "title": "③ 例题 1：小球下落"
      },
      {
       "t": 229.06,
       "title": "④ 例题 2：小船滑行"
      },
      {
       "t": 297.6,
       "title": "总结"
      }
     ],
     "transcript": [
      {
       "title": "① 阻力随速度增大",
       "lines": [
        "这一集讲阻力与终端速度。",
        "物体在空气或水中运动时会受到阻力，速度越大，阻力越大。",
        "低速时阻力与速度成正比，F = −bv，负号表示与速度反向；高速时阻力大约与 v 平方成正比。",
        "AP C 最常考线性阻力，这一集只讲它。",
        "看跳伞：刚跳下时 v 等于零，没有阻力，加速度就是 g。",
        "速度越来越大，阻力 b v 也越来越大，合力变小，加速度变小。",
        "当阻力增大到等于重力，合力为零，速度不再增加，这就是终端速度。",
        "由 mg = bv_T，得到 v_T = mg/b。"
       ]
      },
      {
       "title": "② 推导 v(t)",
       "lines": [
        "取向下为正。小球受重力 mg 向下，阻力 b v 向上。",
        "牛顿第二定律：m dv/dt = mg − bv。",
        "终端时速度不变，dv/dt 等于零，马上得到 v_T = mg/b。",
        "要知道 v 怎样随时间变化，就要解这个微分方程。",
        "两边除以 m，再把含 v 的项移到左边、dt 留在右边，这叫分离变量。",
        "两边积分：速度从 0 到 v，时间从 0 到 t。",
        "左边积出来是自然对数；两边取指数，再解出 v。",
        "令 v_T = mg/b，τ = m/b，就得到 v = v_T(1 − e^(−t/τ))。τ 叫时间常数。",
        "画出 v–t 图：速度从零增大，越来越接近 v_T，但永远不会超过它。",
        "t 等于零时阻力为零，切线斜率就是 g；这条切线正好在 t 等于 τ 处碰到 v_T 线。",
        "t 等于 τ 时，速度达到 v_T 的63%；3τ 时达到95%。",
        "对 v 求导得到加速度 a = g e^(−t/τ)，从 g 开始逐渐衰减到零。"
       ]
      },
      {
       "title": "③ 例题 1：小球下落",
       "lines": [
        "例题一：0.50 千克的小球从静止下落，阻力 F = −bv，b 等于 0.25 kg/s。求终端速度、时间常数、2 秒时的速度，以及速度为 10 米每秒时的加速度。",
        "先看运动：左边无阻力，右边有阻力，同时从静止释放。",
        "(a) 终端速度 v_T = mg/b，0.50 乘 9.8 除以 0.25，等于 19.6 米每秒。",
        "(b) 时间常数 τ = m/b，等于 2.0 秒。灰色的自由落体线就是 t 等于零时的切线，正好在 τ 处碰到 v_T 线。",
        "(c) 2.0 秒恰好是一个 τ，v 等于 19.6 乘以，1 减 e 的负一次方，约 12.4 米每秒。",
        "(d) 不需要 v(t)，直接用牛顿第二定律：a = g − (b/m)v。",
        "9.8 减 0.50 乘 10，等于 4.8 m/s²，正是曲线在这一点的切线斜率。",
        "再看位移：2 秒内有阻力的球只落下约 14.4 米，比自由落体的 19.6 米少。"
       ]
      },
      {
       "title": "④ 例题 2：小船滑行",
       "lines": [
        "例题二：200 千克的小船以 5.0 米每秒行驶时关掉发动机，水的阻力 F = −bv，b 等于 40 千克每秒。速度降为一半要多久？最多还能滑多远？",
        "现在只有阻力：m dv/dt = −bv。同样分离变量、积分，得到指数衰减 v = v₀e^(−t/τ)。",
        "时间常数 τ = m/b，200 除以 40，等于 5.0 秒。",
        "关掉发动机，小船越滑越慢，阻力也越来越小。",
        "速度减半时，e 的负 t 比陶次方等于二分之一，t = τ ln2，约 3.5 秒。",
        "至于能滑多远，要看 v–t 曲线下的面积：从 0 积分到无穷，等于 v₀τ，25 米。",
        "速度永远不会真正变成零，可是总距离有限：小船只会无限逼近 25 米。"
       ]
      },
      {
       "title": "总结",
       "lines": [
        "最后总结。",
        "线性阻力 F = −bv；令加速度为零，得到终端速度 mg/b。",
        "下落速度按指数逼近 v_T；只有阻力时指数衰减，总距离 v₀τ。",
        "解题套路：牛顿第二定律，分离变量，再积分。",
        "我们下期再见！"
       ]
      }
     ]
    },
    "en": {
     "video": "videos/en/18-drag-and-terminal-velocity.mp4",
     "poster": "posters/en/18-drag-and-terminal-velocity.jpg",
     "duration": 355.0,
     "chapters": [
      {
       "t": 0.0,
       "title": "① Drag grows with speed"
      },
      {
       "t": 57.5,
       "title": "② Deriving v(t)"
      },
      {
       "t": 154.77,
       "title": "③ Example 1: falling ball"
      },
      {
       "t": 247.27,
       "title": "④ Example 2: coasting boat"
      },
      {
       "t": 323.43,
       "title": "Summary"
      }
     ],
     "transcript": [
      {
       "title": "① Drag grows with speed",
       "lines": [
        "This episode is about drag and terminal velocity.",
        "Anything moving through air or water feels drag, and more speed means more drag.",
        "At low speed, drag is proportional to v: F = −bv. The minus sign means drag opposes the velocity. At high speed, drag is roughly proportional to v squared.",
        "AP C mostly tests linear drag, so that's all we'll cover.",
        "For a skydiver: right after the jump, v is zero, so there's no drag and a equals g.",
        "As speed grows, the drag bv grows, so the net force and the acceleration shrink.",
        "When drag equals gravity, the net force is zero and v stops increasing: that's terminal velocity.",
        "So mg = bv_T, and v_T = mg/b."
       ]
      },
      {
       "title": "② Deriving v(t)",
       "lines": [
        "Take down as positive. Gravity, mg, points down, and drag, bv, points up.",
        "Newton's second law: m dv/dt = mg − bv.",
        "At terminal velocity, dv/dt is zero, so right away, v_T = mg/b.",
        "To get v as a function of time, we solve this differential equation.",
        "Divide both sides by m. Then put the v terms on the left and dt on the right: that's separation of variables.",
        "Integrate both sides, from 0 to v and from 0 to t.",
        "The left side integrates to a natural log. Exponentiate both sides, then solve for v.",
        "Let v_T = mg/b and τ = m/b: then v = v_T(1 − e^(−t/τ)). τ is called the time constant.",
        "Here's the v–t graph: v starts at zero and approaches v_T, but never goes past it.",
        "At t = 0 there's no drag, so the tangent slope is g. This tangent line meets the v_T line exactly at t = τ.",
        "At t = τ, the speed reaches 63% of v_T. At 3τ, it reaches 95%.",
        "Differentiating gives the acceleration, a = g e^(−t/τ): it starts at g and decays to zero."
       ]
      },
      {
       "title": "③ Example 1: falling ball",
       "lines": [
        "Example 1: a 0.50 kg ball falls from rest with drag F = −bv, and b is 0.25 kg/s. Find the terminal velocity, the time constant, the speed at 2.0 s, and the acceleration when v = 10 m/s.",
        "First, the motion: no drag on the left, drag on the right, both released from rest together.",
        "(a) v_T = mg/b: 0.50 times 9.8, over 0.25, is 19.6 m/s.",
        "(b) The time constant τ = m/b is 2.0 seconds. The gray free-fall line is the tangent at t = 0, and it meets the v_T line right at τ.",
        "(c) 2.0 seconds is exactly one τ, so v is 63% of v_T: about 12.4 m/s.",
        "(d) We don't need v(t) here. Just use Newton's second law: a = g − (b/m)v.",
        "9.8 − 0.50 × 10 = 4.8 m/s²: the tangent slope right here.",
        "In 2 seconds, the ball with drag falls about 14.4 meters, versus 19.6 meters in free fall."
       ]
      },
      {
       "title": "④ Example 2: coasting boat",
       "lines": [
        "Example 2: a 200 kg boat at 5.0 m/s shuts off its engine. Water drag is F = −bv, with b equal to 40 kg/s. How long until its speed is halved? How far can it coast?",
        "Now drag is the only force: m dv/dt = −bv. Separating variables and integrating gives exponential decay, v = v₀e^(−t/τ).",
        "τ = m/b, which is 200 over 40, or 5.0 seconds.",
        "With the engine off, the boat slows down, and the drag gets smaller too.",
        "Half speed means e^(−t/τ) = 1/2, so t = τ ln2: about 3.5 seconds.",
        "The distance is the area under the v–t curve: integrating from 0 to infinity gives v₀τ, 25 meters.",
        "The speed never truly hits zero, but the distance is finite: the boat just creeps toward 25 meters."
       ]
      },
      {
       "title": "Summary",
       "lines": [
        "Let's sum up.",
        "Linear drag is F = −bv. Set the acceleration to zero to get the terminal velocity, mg/b.",
        "A falling object approaches v_T exponentially. With drag alone, speed decays exponentially, and the total distance is v₀τ.",
        "The recipe: Newton's second law, separate variables, then integrate.",
        "See you next time!"
       ]
      }
     ]
    }
   }
  }
 }
};
