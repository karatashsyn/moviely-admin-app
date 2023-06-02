import { useEffect, useState } from 'react'
import { Movie } from '../Types/Movie'
import { adminMovieRepository } from '../Repository/Movie/adminMovieRepository'
import { log } from 'console'

export default function useSearchProducts() {
  const movieService = new adminMovieRepository()
  const emptyProductArray: Array<Movie> = []
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState(emptyProductArray)

  useEffect(() => {
    try {
      setLoading(true)
      setError(false)
      movieService.getPopulars().then((res: any) => {
        setMovies(res)
        setLoading(false)
      })
    } catch (error) {
      setError(true)
    }
    // setMovies(
    //   [
    //     {
    //       id: null,
    //       apiId: 447277,
    //       title: 'The Little Mermaid',
    //       poster: 'https://image.tmdb.org/t/p/original//ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg',
    //       rating: 6,
    //       description:
    //         'The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.',
    //       owned: false,
    //       genres: [
    //         { id: 10751, name: 'Family' },
    //         { id: 10749, name: 'Romance' },
    //         { id: 14, name: 'Fantasy' },
    //         { id: 12, name: 'Adventure' },
    //       ],
    //     },
    //     {
    //       id: null,
    //       apiId: 605886,
    //       title: 'To Catch a Killer',
    //       poster: 'https://image.tmdb.org/t/p/original//mFp3l4lZg1NSEsyxKrdi0rNK8r1.jpg',
    //       rating: 7,
    //       description:
    //         "Baltimore. New Year's Eve. A talented but troubled police officer is recruited by the FBI's chief investigator to help profile and track down a mass murderer.",
    //       owned: false,
    //       genres: [
    //         { id: 9648, name: 'Mystery' },
    //         { id: 80, name: 'Crime' },
    //         { id: 53, name: 'Thriller' },
    //         { id: 28, name: 'Action' },
    //       ],
    //     },
    //     {
    //       id: null,
    //       apiId: 569094,
    //       title: 'Spider-Man: Across the Spider-Verse',
    //       poster: 'https://image.tmdb.org/t/p/original//8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    //       rating: 8.6,
    //       description:
    //         'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
    //       owned: false,
    //       genres: [
    //         { id: 878, name: 'Sci-Fi' },
    //         { id: 28, name: 'Action' },
    //         { id: 16, name: 'Animation' },
    //         { id: 12, name: 'Adventure' },
    //       ],
    //     },
    //     {
    //       id: null,
    //       apiId: 1105803,
    //       title: 'Snag',
    //       poster: 'https://image.tmdb.org/t/p/original//nhj4Q39qMSk6X5Ly9j9Yqyjrg5A.jpg',
    //       rating: 6,
    //       description:
    //         "An Australian lone wolf's quiet existence is shattered when he learns that the woman he once loved and thought was dead is alive and held captive by ruthless gangsters. Now, to take on this dangerous criminal organization, he must seek out allies and storm into a world of violence to rescue the love of his life in this gritty, modern day violent fairytale.",
    //       owned: false,
    //       genres: [
    //         { id: 80, name: 'Crime' },
    //         { id: 53, name: 'Thriller' },
    //         { id: 28, name: 'Action' },
    //       ],
    //     },
    //     {
    //       id: null,
    //       apiId: 315162,
    //       title: 'Puss in Boots: The Last Wish',
    //       poster: 'https://image.tmdb.org/t/p/original//kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
    //       rating: 8.3,
    //       description:
    //         'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.',
    //       owned: false,
    //       genres: [
    //         { id: 10751, name: 'Family' },
    //         { id: 35, name: 'Comedy' },
    //         { id: 16, name: 'Animation' },
    //         { id: 14, name: 'Fantasy' },
    //         { id: 12, name: 'Adventure' },
    //       ],
    //     },
    //     {
    //       id: null,
    //       apiId: 420808,
    //       title: 'Peter Pan & Wendy',
    //       poster: 'https://image.tmdb.org/t/p/original//9NXAlFEE7WDssbXSMgdacsUD58Y.jpg',
    //       rating: 5.8,
    //       description:
    //         'Wendy Darling, a young girl afraid to leave her childhood home behind, meets Peter Pan, a boy who refuses to grow up. Alongside her brothers and a tiny fairy, Tinker Bell, she travels with Peter to the magical world of Neverland. There, she encounters an evil pirate captain, Captain Hook, and embarks on a thrilling adventure that will change her life forever.',
    //       owned: false,
    //       genres: [
    //         { id: 10751, name: 'Family' },
    //         { id: 28, name: 'Action' },
    //         { id: 14, name: 'Fantasy' },
    //         { id: 12, name: 'Adventure' },
    //       ],
    //     },
    //     {
    //       id: null,
    //       apiId: 934433,
    //       title: 'Scream VI',
    //       poster: 'https://image.tmdb.org/t/p/original//wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg',
    //       rating: 7.3,
    //       description:
    //         'Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.',
    //       owned: false,
    //       genres: [
    //         { id: 9648, name: 'Mystery' },
    //         { id: 53, name: 'Thriller' },
    //         { id: 27, name: 'Horror' },
    //       ],
    //     },
    //     {
    //       id: null,
    //       apiId: 493529,
    //       title: 'Dungeons & Dragons: Honor Among Thieves',
    //       poster: 'https://image.tmdb.org/t/p/original//A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg',
    //       rating: 7.5,
    //       description:
    //         'A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.',
    //       owned: false,
    //       genres: [
    //         { id: 35, name: 'Comedy' },
    //         { id: 14, name: 'Fantasy' },
    //         { id: 12, name: 'Adventure' },
    //       ],
    //     },
    //     {
    //       id: null,
    //       apiId: 1107872,
    //       title: "Mother's Day",
    //       poster: 'https://image.tmdb.org/t/p/original//wws9Z90DdZ7D0n3gdzFSZ6cntJi.jpg',
    //       rating: 5.8,
    //       description:
    //         'Nina, a former NATO special operations agent living in hiding, has to use all her deadly skills to rescue her son who has been kidnapped by ruthless gangsters. Finding Max is a double opportunity for her. A chance to feel the adrenaline rush again, and an opportunity to get back into the life of the son she had to abandon years ago.',
    //       owned: false,
    //       genres: [
    //         { id: 53, name: 'Thriller' },
    //         { id: 28, name: 'Action' },
    //         { id: 18, name: 'Drama' },
    //       ],
    //     },
    //     {
    //       id: null,
    //       apiId: 1016121,
    //       title: 'Beautiful Disaster',
    //       poster: 'https://image.tmdb.org/t/p/original//bwdLflvCcOCRPqb1x13KPuYIzVx.jpg',
    //       rating: 6.1,
    //       description:
    //         'Bad-boy Travis is exactly what college freshman Abby needs and wants to avoid. He spends his nights fighting in underground boxing matches, and his days as the ultimate college campus charmer. But Abby wants nothing to do with Travis. Intrigued by Abby’s resistance, Travis offers her a simple bet: if he loses his next fight, he must remain sex-free for a month. If he wins, Abby must live in his apartment for the same amount of time. Either way, Travis has no idea that Abby’s dark past is about to emerge, and he may have finally met his match.',
    //       owned: false,
    //       genres: [
    //         { id: 10749, name: 'Romance' },
    //         { id: 35, name: 'Comedy' },
    //         { id: 18, name: 'Drama' },
    //       ],
    //     },
    //     {
    //       id: null,
    //       apiId: 325358,
    //       title: 'Superfast!',
    //       poster: 'https://image.tmdb.org/t/p/original//iuIWl90qCpoxv6g775JB6Kg0m86.jpg',
    //       rating: 5,
    //       description:
    //         "Undercover cop Lucas White joins Vin Serento's LA gang of illegal street racers. They are fast and they are furious and they plan to double cross LA crime kingpin Juan Carlos de la Sol who hides his cash in a downtown Taco Bell. The gang's outrageous plan is as daring as it is ridiculous and will see them towing the whole restaurant, at crazy speeds.",
    //       owned: false,
    //       genres: [
    //         { id: 35, name: 'Comedy' },
    //         { id: 28, name: 'Action' },
    //       ],
    //     },
    //     {
    //       id: null,
    //       apiId: 916224,
    //       title: 'Suzume',
    //       poster: 'https://image.tmdb.org/t/p/original//vIeu8WysZrTSFb2uhPViKjX9EcC.jpg',
    //       rating: 7.9,
    //       description:
    //         'Suzume, 17, lost her mother as a little girl. On her way to school, she meets a mysterious young man. But her curiosity unleashes a calamity that endangers the entire population of Japan, and so Suzume embarks on a journey to set things right.',
    //       owned: false,
    //       genres: [
    //         { id: 18, name: 'Drama' },
    //         { id: 16, name: 'Animation' },
    //         { id: 14, name: 'Fantasy' },
    //         { id: 12, name: 'Adventure' },
    //       ],
    //     },
    //     {
    //       id: null,
    //       apiId: 702621,
    //       title: 'Lullaby',
    //       poster: 'https://image.tmdb.org/t/p/original//vmE4gZ9vy8ammgS2UsEh0Z1OCia.jpg',
    //       rating: 5.8,
    //       description:
    //         'A new mother discovers a lullaby in an ancient book and soon regards the song as a blessing. But her world transforms into a nightmare when the lullaby brings forth the ancient demon Lilith.',
    //       owned: false,
    //       genres: [{ id: 27, name: 'Horror' }],
    //     },
    //     {
    //       id: null,
    //       apiId: 977223,
    //       title: 'Polite Society',
    //       poster: 'https://image.tmdb.org/t/p/original//lv1WqAo2ulQy9aSOG7ikR44p8RR.jpg',
    //       rating: 6.8,
    //       description:
    //         'Martial artist-in-training Ria Khan believes she must save her older sister Lena from her impending marriage. After enlisting the help of her friends, Ria attempts to pull off the most ambitious of all wedding heists in the name of independence and sisterhood.',
    //       owned: false,
    //       genres: [
    //         { id: 35, name: 'Comedy' },
    //         { id: 28, name: 'Action' },
    //         { id: 12, name: 'Adventure' },
    //       ],
    //     },
    //     {
    //       id: null,
    //       apiId: 505642,
    //       title: 'Black Panther: Wakanda Forever',
    //       poster: 'https://image.tmdb.org/t/p/original//sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
    //       rating: 7.3,
    //       description:
    //         'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
    //       owned: false,
    //       genres: [
    //         { id: 878, name: 'Sci-Fi' },
    //         { id: 28, name: 'Action' },
    //         { id: 12, name: 'Adventure' },
    //       ],
    //     },
    //     {
    //       id: null,
    //       apiId: 638974,
    //       title: 'Murder Mystery 2',
    //       poster: 'https://image.tmdb.org/t/p/original//s1VzVhXlqsevi8zeCMG9A16nEUf.jpg',
    //       rating: 6.6,
    //       description:
    //         'After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped from his wedding.',
    //       owned: false,
    //       genres: [
    //         { id: 80, name: 'Crime' },
    //         { id: 35, name: 'Comedy' },
    //       ],
    //     },
    //     {
    //       id: null,
    //       apiId: 948713,
    //       title: 'The Last Kingdom: Seven Kings Must Die',
    //       poster: 'https://image.tmdb.org/t/p/original//qcNDxDzd5OW9wE3c8nWxCBQoBrM.jpg',
    //       rating: 7.3,
    //       description:
    //         "In the wake of King Edward's death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
    //       owned: false,
    //       genres: [
    //         { id: 10752, name: 'War' },
    //         { id: 28, name: 'Action' },
    //         { id: 12, name: 'Adventure' },
    //       ],
    //     },
    //   ].slice(0, 12)
    // )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { movies, loading, error }
}
