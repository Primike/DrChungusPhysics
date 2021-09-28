Course.create(subject: 'Quantum Mechanics', subject_image: "https://scx2.b-cdn.net/gfx/news/hires/2015/5666a45b218f7.jpg", completed: false)
Course.create(subject: 'Classical Mechanics', subject_image: "https://cdn1.byjus.com/wp-content/uploads/2018/11/physics/wp-content/uploads/2016/08/3.png", completed: false)
Course.create(subject: 'Electricity and Magnetism', subject_image: "https://cdn.vox-cdn.com/thumbor/1ZPuV80n_PVUARYlkcCorFG_Frk=/0x0:3000x3000/1200x800/filters:focal(1260x1260:1740x1740)/cdn.vox-cdn.com/uploads/chorus_image/image/50911339/electricity.0.jpg", completed: false)
Course.create(subject: 'General Relativity', subject_image: "https://static.scientificamerican.com/blogs/cache/file/BF34DFF9-BBE0-4079-B998E97CA9EAFEB1.jpg", completed: false)
Course.create(subject: 'Thermodynamics', subject_image: "https://sciencenotes.org/wp-content/uploads/2015/10/energyball.jpg", completed: false)

Chapter.create(title: "Electrons", content: "Electrons are particles that can usually be found around the nucleous of atoms. Electrons have a very small amount of mass but have no size. Electrons are actually not like the balls in the picture but are points with no volume. All electrons are identical and it is impossible to distinguish one from another. Since electrons and other particles are very small their quantum properties are visible in experiments. Larger objects like animals have basically invisible quantum properties.", image: "https://circuitglobe.com/wp-content/uploads/2020/05/structure-of-atom1.jpg", course_id: Course.find_by(subject: "Quantum Mechanics").id)
Chapter.create(title: "Wave Particle Duality", content: "In the double slit experiment light particles were shot from a laser through two openings called slits. Since they were particles they were expected to hit the board and create 2 rectangles like what would happen if you shot paintballs. Instead they created a wave like pattern in the board. This experiment led to the conclusion that light was both a wave and a particle. A wave would mean a kind of cloud of probabilities. All particles share this feature with light.", image: "https://quantumpreception.files.wordpress.com/2019/01/doubleslottest-1400x793-71-2.jpg", course_id: Course.find_by(subject: "Quantum Mechanics").id)
Chapter.create(title: "Schrodinger Equation", content: "This is the famed Schrodinger equation. This equation is solved for the trident like figure called Psi. Psi describes a particle and its quantum properties like position, energy and momentum. Psi is called the wavefunction since a particle is actually a wave. Psi evaluated at different positions is called the eigenstates of a particle. Depending on certain factors a particle(Psi) can have many eigenstates each describing a unique energy amount of the particle. Using an analogy you represent a particle the eigenfunction represents all the USA and the eigenstates represent the 50 states. Depending on which state you are in you will be in a different position and will feel different weather(energy)", image: "https://2.bp.blogspot.com/--q2Mb0j2tR0/Tdr5vUK0UrI/AAAAAAAAABU/wx5WClTbj74/s1600/1242266_f496.jpg", course_id: Course.find_by(subject: "Quantum Mechanics").id)
Chapter.create(title: "Wave Function", content: "This is a graph of the wavefunction Psi of a particle. Since a particle is a wave it does not have a position but a probability of positions. If the graph represented a football field the particle would most likely be found in the center since that is when the probability is the highest. Only when a particle is measured does the probability cloud disappear and a particle becomes a point and not a wave.", image: "https://themeaningolife.files.wordpress.com/2010/05/quantum-wave-function.png", course_id: Course.find_by(subject: "Quantum Mechanics").id)
Chapter.create(title: "Eigenfunctions", content: "This graph represents some particles eigenstates. These eigenstates are represented by Psi evaluated at different energy values shown by the numbers next to Psi. The waves show the probability cloud of a particle.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0e9aKNNghq9LM8HtI70C0kBHikDsBAjBS7WC1cd-8hmxIg1Xbz20BVEznBniCfkJL80&usqp=CAU", course_id: Course.find_by(subject: "Quantum Mechanics").id)
Chapter.create(title: "Superposition", content: "This is schrodingers cat. If the cat was a particle then the concept of alive and dead represent different positions(eigenstates) of a particle. Until you look inside the box the cat is in it is basically both alive and dead to you. The same way until you look at an electron it is actually in multiple positions(eigenstates) represented by a probability cloud.", image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3F1YW50dW0taW1tb3J0YWxpdHktaWxsdXN0cmF0aW9uLmdpZiIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjkwfX19", course_id: Course.find_by(subject: "Quantum Mechanics").id)
Chapter.create(title: "Heisenberg Uncertainty Principle", content: "This is Heisenberg's uncertainty principle it states that you can never know both the position and momentum of a particle. If you look at a ball rolling on the ground you can tell the balls position and momentum(velocity) at a certain time. The same is not true of particles and tiny objects. You either measure the position or the speed you cant know both.", image: "https://cdn.zmescience.com/wp-content/uploads/2020/05/1_nEaJVpcLRDNLUKXttypcFA.png", course_id: Course.find_by(subject: "Quantum Mechanics").id)
Chapter.create(title: "Tunneling", content: "This is the Quantum Phenomenon of tunneling. In classical physics(Our world) a ball can only roll over a barrier or it is reflected if it hits a hard wall. In the quantum world a particle and actually teleport across a barrier or wall if it has a high enough energy. The higher the energy the higher the probability that an electron launched against a barrier will be able to teleport across.", image: "https://cosmosmagazine.com/wp-content/uploads/2020/04/190318-quantum-pr.jpg", course_id: Course.find_by(subject: "Quantum Mechanics").id)
Chapter.create(title: "Quantum Entanglement", content: "Quantum entanglement is one of the most bizzare properties of quantum mechanics baffling even Einstein. There exists some bizzare connection between two particles that seemingly allows one to affect the other instantly even at immense distances. An analogy of this effect would be two coins that are entangled if one is heads the other will always be tails and vice versa. Now if you flip a coin and it lands on heads then when you flip the other coin it will always land on tails. This happens even if the two coins are separated by billions of light years. This property appears to break the crucial speed of light limit but causality is rescued by the fact that no information can be carried by this connection.", image: "https://cdn.mos.cms.futurecdn.net/XXvNg65B8odU3wbAi5J44D-1200-80.jpg", course_id: Course.find_by(subject: "Quantum Mechanics").id)
Chapter.create(title: "Quantum Erasor", content: "The quantum erasor is an improved double slit experiment but it is even more bizzare than the original. The experiment is hard to explain in laymans terms but the main idea is this: if you send particles through the slits while observing them each will go through one slit. If you dont observe the particles they will go through both slits at the same time like if the particle was a wave. Now you cant believe that the particle can go through both openings at the same time so you create a clone after it goes through the slits. Then you measure the clone to see which slit it went through but the universe somehow knows beforehand you will measure the clone so it makes the original particle act as if it was being observed and it goes through only one slit. Then if you add an erasor that erases the information of the clone before you can see it the original particle will act like it went through both openings as if the universe knew you would lose the information.", image: "https://www.physicsforums.com/attachments/1596730080345-png.267365/", course_id: Course.find_by(subject: "Quantum Mechanics").id)

QuizQuestion.create(question: "What is a electron", course_id: Course.find_by(subject: "Quantum Mechanics").id )
QuizQuestion.create(question: "What is a photon", course_id: Course.find_by(subject: "Quantum Mechanics").id )
QuizQuestion.create(question: "What is a proton", course_id: Course.find_by(subject: "Quantum Mechanics").id )

QuizAnswer.create(answer: "a wave", correct: false, quiz_question_id: QuizQuestion.find_by(question: "What is a electron").id)
QuizAnswer.create(answer: "a particle", correct: false, quiz_question_id: QuizQuestion.find_by(question: "What is a electron").id)
QuizAnswer.create(answer: "a point", correct: false, quiz_question_id: QuizQuestion.find_by(question: "What is a electron").id)
QuizAnswer.create(answer: "a wave and a particle", correct: true, quiz_question_id: QuizQuestion.find_by(question: "What is a electron").id)

QuizAnswer.create(answer: "a wave", correct: false, quiz_question_id: QuizQuestion.find_by(question: "What is a photon").id)
QuizAnswer.create(answer: "a particle", correct: false, quiz_question_id: QuizQuestion.find_by(question: "What is a photon").id)
QuizAnswer.create(answer: "a point", correct: false, quiz_question_id: QuizQuestion.find_by(question: "What is a photon").id)
QuizAnswer.create(answer: "a wave and a particle", correct: true, quiz_question_id: QuizQuestion.find_by(question: "What is a photon").id)

QuizAnswer.create(answer: "a wave", correct: false, quiz_question_id: QuizQuestion.find_by(question: "What is a proton").id)
QuizAnswer.create(answer: "a particle", correct: false, quiz_question_id: QuizQuestion.find_by(question: "What is a proton").id)
QuizAnswer.create(answer: "a point", correct: false, quiz_question_id: QuizQuestion.find_by(question: "What is a proton").id)
QuizAnswer.create(answer: "a wave and a particle", correct: true, quiz_question_id: QuizQuestion.find_by(question: "What is a proton").id)
