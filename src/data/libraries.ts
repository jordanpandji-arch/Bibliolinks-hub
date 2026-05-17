/* src/data/libraries.ts */

export interface Library {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string[];
  stats: string;
  image: string;
}

export const libraries: Library[] = [
  {
    id: "internet-archive",
    name: "Internet Archive",
    description: "Une bibliothèque numérique à but non lucratif offrant un accès gratuit à des millions de livres, de films, de logiciels et de musique.",
    url: "https://archive.org",
    category: ["Multi-domaine", "Multimédia"],
    stats: "38M+ livres",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "annas-archive",
    name: "Anna’s Archive",
    description: "Le plus grand moteur de recherche de bibliothèques fantômes au monde, centralisant l'accès à des millions de livres et d'articles scientifiques.",
    url: "https://annas-archive.gd/",
    category: ["Libre Accès", "Livres & Articles"],
    stats: "30M+ Livres",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "z-library",
    name: "Z-Library",
    description: "L'une des plus vastes bibliothèques numériques en ligne, offrant un accès gratuit à une immense collection de livres et de revues académiques.",
    url: "https://fr.z-lib.fm/",
    category: ["Livres", "Académique"],
    stats: "14M+ eBooks",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "sci-hub",
    name: "Sci-Hub",
    description: "Une plateforme révolutionnaire fournissant un accès gratuit à presque toutes les publications scientifiques mondiales pour supprimer les barrières au savoir.",
    url: "https://sci-hub.li/",
    category: ["Science", "Recherche"],
    stats: "88M+ Articles",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "project-gutenberg",
    name: "Project Gutenberg",
    description: "La plus ancienne bibliothèque numérique au monde, proposant plus de 60 000 livres électroniques gratuits, principalement des classiques du domaine public.",
    url: "https://www.gutenberg.org",
    category: ["Littérature", "Classiques"],
    stats: "60k+ eBooks",
    image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "open-library",
    name: "Open Library",
    description: "Un projet de l'Internet Archive visant à créer 'une page web pour chaque livre jamais publié'. Accès libre à des millions de titres empruntables.",
    url: "https://openlibrary.org",
    category: ["Livres", "Archives"],
    stats: "20M+ Éditions",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "jstor-open",
    name: "JSTOR Open Content",
    description: "Accès libre à des milliers de revues académiques, de livres et de rapports de recherche dans de nombreuses disciplines.",
    url: "https://www.jstor.org/open/",
    category: ["Académique", "Recherche"],
    stats: "6k+ Revues",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "doab",
    name: "DOAB",
    description: "Directory of Open Access Books. Service de découverte indexant des milliers de livres académiques en libre accès évalués par des pairs.",
    url: "https://www.doabooks.org",
    category: ["Académique", "Livres"],
    stats: "66k+ Livres",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "europeana",
    name: "Europeana",
    description: "La plateforme culturelle de l'Union européenne, donnant accès à des millions d'œuvres d'art, de livres et de vidéos des musées et bibliothèques d'Europe.",
    url: "https://www.europeana.eu",
    category: ["Culture", "Art"],
    stats: "50M+ Objets",
    image: "https://images.unsplash.com/photo-1554941068-a252680d25d9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "hathitrust",
    name: "HathiTrust",
    description: "Un immense dépôt collaboratif de contenu numérique provenant de grandes bibliothèques de recherche, incluant des millions de titres du domaine public.",
    url: "https://www.hathitrust.org",
    category: ["Archives", "Académique"],
    stats: "17M+ Volumes",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "openstax",
    name: "OpenStax",
    description: "Manuels scolaires gratuits et de haute qualité pour le collège et l'université, développés par l'Université Rice.",
    url: "https://openstax.org",
    category: ["Éducation", "Manuels"],
    stats: "100% Gratuit",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "pubmed-central",
    name: "PubMed Central",
    description: "Archives gratuites de textes complets de revues biomédicales et de sciences de la vie des National Institutes of Health des États-Unis.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/",
    category: ["Médecine", "Sciences"],
    stats: "9M+ Articles",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "arxiv",
    name: "arXiv",
    description: "Service de distribution gratuit et archives en libre accès pour plus de 2 millions d'articles savants en physique, mathématiques et informatique.",
    url: "https://arxiv.org",
    category: ["Science", "Technologie"],
    stats: "2M+ Articles",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "core",
    name: "CORE",
    description: "Le plus grand agrégateur au monde d'articles de recherche en libre accès provenant de dépôts et de revues.",
    url: "https://core.ac.uk",
    category: ["Recherche", "Open Access"],
    stats: "210M+ Articles",
    image: "https://images.unsplash.com/photo-1503551723145-6c040742065b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "scielo",
    name: "SciELO",
    description: "Une bibliothèque électronique coopérative de revues scientifiques en libre accès, particulièrement riche pour l'Amérique latine et les Caraïbes.",
    url: "https://scielo.org",
    category: ["Science", "International"],
    stats: "1M+ Articles",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "doaj",
    name: "DOAJ",
    description: "Directory of Open Access Journals. Index indépendant et multidisciplinaire de revues en libre accès de haute qualité.",
    url: "https://doaj.org",
    category: ["Académique", "Revues"],
    stats: "19k+ Revues",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "wikisource",
    name: "Wikisource",
    description: "Une bibliothèque de textes sources libres, gérée par la communauté Wikimedia, incluant des documents historiques originaux.",
    url: "https://wikisource.org",
    category: ["Histoire", "Documents"],
    stats: "5M+ Textes",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "gallica",
    name: "Gallica",
    description: "La bibliothèque numérique de la Bibliothèque nationale de France et de ses partenaires. Des millions de documents du patrimoine français.",
    url: "https://gallica.bnf.fr",
    category: ["Patrimoine", "Histoire"],
    stats: "10M+ Docs",
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "semantic-scholar",
    name: "Semantic Scholar",
    description: "Outil de recherche de littérature scientifique alimenté par l'IA, offrant des extractions et des connexions intelligentes.",
    url: "https://www.semanticscholar.org",
    category: ["IA", "Recherche"],
    stats: "211M+ Articles",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "eric",
    name: "ERIC",
    description: "Education Resources Information Center. Une immense base de données numérique de littérature et de recherche sur l'éducation.",
    url: "https://eric.ed.gov",
    category: ["Éducation", "Recherche"],
    stats: "1.6M+ Records",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "ssrn",
    name: "SSRN",
    description: "Social Science Research Network. Un dépôt mondial pour la recherche académique en sciences sociales et humaines.",
    url: "https://www.ssrn.com",
    category: ["Sciences Sociales", "Économie"],
    stats: "1M+ Papers",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "biorxiv",
    name: "bioRxiv",
    description: "Le serveur de prépublication gratuit en libre accès pour la biologie de Cold Spring Harbor Laboratory.",
    url: "https://www.biorxiv.org",
    category: ["Biologie", "Science"],
    stats: "200k+ Preprints",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "zenodo",
    name: "Zenodo",
    description: "Un dépôt de recherche ouvert à but non lucratif permettant aux chercheurs de déposer des ensembles de données et des logiciels.",
    url: "https://zenodo.org",
    category: ["Données", "Science Ouverte"],
    stats: "Open Data",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "mit-ocw",
    name: "MIT OpenCourseWare",
    description: "Une publication en ligne de pratiquement tous les contenus des cours du MIT, ouverte et disponible pour le monde entier.",
    url: "https://ocw.mit.edu",
    category: ["Éducation", "Cours"],
    stats: "2.5k+ Cours",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "oapen",
    name: "OAPEN Library",
    description: "Online Library and Publication Platform. Livres académiques en libre accès, principalement en sciences humaines et sociales.",
    url: "https://www.oapen.org",
    category: ["Académique", "Humanités"],
    stats: "25k+ Livres",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop"
  }
];
