import { Topic } from '../syllabus';

export const machineLearningUnit4: Topic[] = [
  {
    id: 'hierarchical-vs-non-hierarchical-clustering',
    name: 'Hierarchical vs Non-hierarchical Clustering',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit IV',
    content: {
      introduction: 'Clustering algorithms can be categorized into hierarchical methods that create tree-like structures and non-hierarchical methods that create flat partitions.',
      definition: 'Hierarchical clustering creates nested cluster structures at multiple levels, while non-hierarchical clustering partitions data into a fixed number of clusters.',
      realWorldExample: 'Biological taxonomy uses hierarchical clustering (species → genus → family), while market segmentation often uses non-hierarchical clustering to create distinct customer groups.',
      realWorldUse: 'Applied in data exploration, pattern recognition, image segmentation, and organizing large datasets for analysis.',
      importance: 'Understanding different clustering approaches helps select appropriate methods for specific data characteristics and analysis goals.',
      detailedExplanation: `Hierarchical clustering produces dendrograms showing cluster relationships at different granularities, allowing exploration of data structure at multiple levels. It doesn\'t require pre-specifying cluster numbers but has O(n³) complexity limiting scalability. Non-hierarchical clustering like K-means creates flat partitions with predetermined cluster numbers, offering better scalability with O(n) complexity per iteration. Hierarchical methods preserve more information about data structure but are computationally expensive. Non-hierarchical methods are faster and suitable for large datasets but require choosing cluster numbers and may find local optima. Choice depends on data size, desired output format, and computational resources. Hybrid approaches combine both methods: use hierarchical clustering on samples to determine cluster numbers, then apply non-hierarchical methods to full data.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4b5d3muPQmA',
        'https://www.youtube.com/watch?v=VtRLrQ3Ev-U'
      ],
      externalLinks: [
        { title: 'Clustering Algorithms Comparison', url: 'https://www.analyticsvidhya.com/blog/2016/11/an-introduction-to-clustering-and-different-methods-of-clustering/' },
        { title: 'Hierarchical vs K-Means', url: 'https://www.geeksforgeeks.org/difference-between-k-means-and-hierarchical-clustering/' }
      ]
    }
  },
  {
    id: 'agglomerative-divisive-clustering',
    name: 'Agglomerative and Divisive Clustering',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit IV',
    content: {
      introduction: 'Hierarchical clustering can be performed bottom-up (agglomerative) by merging clusters or top-down (divisive) by splitting clusters.',
      definition: 'Agglomerative clustering starts with individual points and merges closest clusters, while divisive clustering starts with all points and recursively splits clusters.',
      realWorldExample: 'Phylogenetic tree construction uses agglomerative clustering to group similar species, while organizational restructuring might use divisive clustering to split departments.',
      realWorldUse: 'Applied in phylogenetics, social network analysis, image segmentation, and any domain requiring hierarchical data organization.',
      importance: 'Provides different perspectives on data structure and enables flexible exploration of cluster hierarchies.',
      detailedExplanation: `Agglomerative clustering begins with each point as a separate cluster and iteratively merges the closest pair until all points are in one cluster. Linkage criteria determine "closeness": single linkage (minimum distance), complete linkage (maximum distance), average linkage (mean distance), and Ward linkage (minimize within-cluster variance). The algorithm produces a dendrogram showing merge sequence and distances. Divisive clustering starts with all points in one cluster and recursively splits clusters to maximize some criterion. It\'s computationally more expensive as it must consider all possible splits. Agglomerative is more common due to computational efficiency and intuitive bottom-up approach. Both methods create the same hierarchy but with different computational characteristics. The choice of linkage criterion significantly affects cluster shapes and results.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4b5d3muPQmA',
        'https://www.youtube.com/watch?v=VtRLrQ3Ev-U'
      ],
      externalLinks: [
        { title: 'Hierarchical Clustering Types', url: 'https://www.analyticsvidhya.com/blog/2019/05/beginners-guide-hierarchical-clustering/' },
        { title: 'Agglomerative Clustering', url: 'https://scikit-learn.org/stable/modules/clustering.html#hierarchical-clustering' }
      ]
    }
  },
  {
    id: 'k-means-clustering',
    name: 'K-means Clustering',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit IV',
    content: {
      introduction: 'K-means is a popular non-hierarchical clustering algorithm that partitions data into k clusters by minimizing within-cluster sum of squares.',
      definition: 'K-means clustering partitions n observations into k clusters where each observation belongs to the cluster with the nearest centroid.',
      realWorldExample: 'Netflix uses K-means to group users with similar viewing preferences, enabling targeted content recommendations and personalized interfaces.',
      realWorldUse: 'Applied in customer segmentation, image compression, data preprocessing, and any application requiring data partitioning.',
      importance: 'Fundamental clustering algorithm that is simple, efficient, and widely applicable across various domains.',
      detailedExplanation: `K-means algorithm alternates between two steps: assignment (assign each point to nearest centroid) and update (recalculate centroids as cluster means). The algorithm minimizes within-cluster sum of squared distances (WCSS). Initialization affects results; common methods include random initialization and K-means++. The algorithm converges to local optima, so multiple runs with different initializations are recommended. Advantages include simplicity, efficiency O(nkt) where t is iterations, and good performance on spherical clusters. Limitations include requiring pre-specified k, sensitivity to initialization and outliers, assumption of spherical clusters, and difficulty with varying cluster sizes. Extensions include K-means++, mini-batch K-means, and fuzzy C-means. Choosing optimal k uses methods like elbow method, silhouette analysis, and gap statistic.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4b5d3muPQmA',
        'https://www.youtube.com/watch?v=VtRLrQ3Ev-U'
      ],
      externalLinks: [
        { title: 'K-Means Clustering', url: 'https://www.analyticsvidhya.com/blog/2019/08/comprehensive-guide-k-means-clustering/' },
        { title: 'K-Means Algorithm', url: 'https://scikit-learn.org/stable/modules/clustering.html#k-means' }
      ]
    }
  },
  {
    id: 'bisecting-k-means',
    name: 'Bisecting K-means',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit IV',
    content: {
      introduction: 'Bisecting K-means combines hierarchical and partitional clustering by recursively applying K-means with k=2 to create a hierarchy.',
      definition: 'Bisecting K-means starts with all points in one cluster and recursively splits the largest cluster using K-means with k=2 until desired number of clusters is reached.',
      realWorldExample: 'Document clustering systems use bisecting K-means to organize large document collections into hierarchical topic structures.',
      realWorldUse: 'Applied in document clustering, web page organization, and scenarios requiring both hierarchical structure and computational efficiency.',
      importance: 'Provides compromise between hierarchical clustering\'s structure and K-means\' efficiency, often producing better results than standard K-means.',
      detailedExplanation: `Bisecting K-means algorithm: 1) Start with all points in one cluster, 2) Select cluster to split (usually largest), 3) Apply K-means with k=2 to split selected cluster, 4) Repeat until desired number of clusters. The method can choose clusters to split based on size, within-cluster sum of squares, or other criteria. Advantages include better cluster quality than standard K-means, hierarchical structure for exploration, and reduced sensitivity to initialization. The algorithm tends to produce more balanced clusters and is less affected by outliers. Computational complexity is between standard K-means and hierarchical clustering. The hierarchical structure allows stopping at any level and provides insights into data organization. Variations include different cluster selection criteria and post-processing steps to improve results.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4b5d3muPQmA',
        'https://www.youtube.com/watch?v=VtRLrQ3Ev-U'
      ],
      externalLinks: [
        { title: 'Bisecting K-Means', url: 'https://www.geeksforgeeks.org/bisecting-k-means-algorithm/' },
        { title: 'Hierarchical K-Means', url: 'https://spark.apache.org/docs/latest/ml-clustering.html#bisecting-k-means' }
      ]
    }
  },
  {
    id: 'k-means-em-special-case',
    name: 'K-Means as Special Case of Expectation Maximization',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit IV',
    content: {
      introduction: 'K-means can be viewed as a special case of the EM algorithm applied to Gaussian Mixture Models with specific constraints.',
      definition: 'K-means is equivalent to EM for Gaussian Mixture Models with equal, spherical covariances and hard cluster assignments.',
      realWorldExample: 'Understanding this connection helps explain why K-means assumes spherical clusters and why soft clustering methods like GMM can be more flexible.',
      realWorldUse: 'Applied in understanding algorithm relationships, developing new clustering methods, and choosing between hard and soft clustering.',
      importance: 'Provides theoretical foundation for K-means and bridges understanding between different clustering approaches.',
      detailedExplanation: `K-means corresponds to EM for GMM with constraints: equal covariance matrices (σ²I), hard assignments (posterior probabilities are 0 or 1), and uniform mixing coefficients. The E-step becomes hard assignment to nearest centroid, and M-step becomes centroid update as cluster mean. This connection explains K-means limitations: spherical cluster assumption comes from equal, diagonal covariances; sensitivity to cluster sizes relates to uniform mixing coefficients. Relaxing constraints leads to more flexible algorithms: allowing different covariances enables elliptical clusters, soft assignments enable overlapping clusters, and different mixing coefficients handle unequal cluster sizes. The connection provides theoretical justification for K-means convergence and suggests improvements. Understanding this relationship helps choose between K-means (fast, simple) and GMM (flexible, probabilistic) based on data characteristics and requirements.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=REypj2sy_5U',
        'https://www.youtube.com/watch?v=4b5d3muPQmA'
      ],
      externalLinks: [
        { title: 'K-Means and EM Connection', url: 'https://www.geeksforgeeks.org/expectation-maximization-algorithm-and-gaussian-mixture-model/' },
        { title: 'GMM vs K-Means', url: 'https://www.analyticsvidhya.com/blog/2019/10/gaussian-mixture-models-clustering/' }
      ]
    }
  },
  {
    id: 'k-medoids-clustering',
    name: 'K-medoids Clustering',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit IV',
    content: {
      introduction: 'K-medoids clustering uses actual data points as cluster centers (medoids) instead of computed centroids, providing robustness to outliers.',
      definition: 'K-medoids partitions data into k clusters where each cluster is represented by one of its actual data points (medoid) that minimizes total dissimilarity.',
      realWorldExample: 'Retail store location planning uses K-medoids to select actual store locations that minimize total distance to customers in each region.',
      realWorldUse: 'Applied when cluster centers must be actual data points, with non-Euclidean distances, or when robustness to outliers is important.',
      importance: 'Provides more robust clustering than K-means and works with any distance metric, not just Euclidean distance.',
      detailedExplanation: `K-medoids algorithm (PAM - Partitioning Around Medoids): 1) Initialize k medoids randomly, 2) Assign each point to nearest medoid, 3) For each medoid, try swapping with non-medoid points, 4) Keep swap if it reduces total cost, 5) Repeat until convergence. The algorithm minimizes sum of distances from points to their medoids. Advantages include robustness to outliers (medoids are actual points), working with any distance metric, and interpretable cluster centers. Disadvantages include higher computational complexity O(n²) and potentially getting stuck in local optima. Variations include CLARA (Clustering Large Applications) for large datasets and CLARANS (Clustering Large Applications based on Randomized Search) for improved efficiency. The method is particularly useful for categorical data, mixed data types, and when cluster representatives must be actual observations.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=4b5d3muPQmA',
        'https://www.youtube.com/watch?v=VtRLrQ3Ev-U'
      ],
      externalLinks: [
        { title: 'K-Medoids Clustering', url: 'https://www.geeksforgeeks.org/ml-k-medoids-clustering-with-example/' },
        { title: 'PAM Algorithm', url: 'https://www.analyticsvidhya.com/blog/2021/03/k-medoids-clustering-how-it-is-different-from-k-means/' }
      ]
    }
  },
  {
    id: 'apriori-algorithm',
    name: 'Association Mining: Apriori Algorithm',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit IV',
    content: {
      introduction: 'The Apriori algorithm discovers frequent itemsets and association rules in transactional data using the downward closure property.',
      definition: 'Apriori algorithm finds frequent itemsets by using the principle that all subsets of a frequent itemset must also be frequent.',
      realWorldExample: 'Supermarkets use Apriori to discover that customers who buy bread and butter often also buy milk, enabling strategic product placement.',
      realWorldUse: 'Applied in market basket analysis, recommendation systems, web usage mining, and discovering patterns in transactional data.',
      importance: 'Fundamental algorithm for association rule mining that enables discovery of interesting relationships in large datasets.',
      detailedExplanation: `Apriori algorithm works in two phases: 1) Find all frequent itemsets (support ≥ minimum threshold), 2) Generate association rules from frequent itemsets (confidence ≥ minimum threshold). The algorithm uses downward closure property: if an itemset is infrequent, all its supersets are also infrequent. This enables pruning of candidate itemsets. Steps include: generate candidate 1-itemsets, prune infrequent items, generate candidate 2-itemsets from frequent 1-itemsets, continue until no frequent itemsets found. Association rules are generated by splitting frequent itemsets into antecedent and consequent parts. Key metrics include support (frequency of itemset), confidence (conditional probability), and lift (independence measure). Challenges include computational complexity with large datasets and many items. Optimizations include hash trees, transaction reduction, and partitioning.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=WGlMlS_Yydk',
        'https://www.youtube.com/watch?v=VtRLrQ3Ev-U'
      ],
      externalLinks: [
        { title: 'Apriori Algorithm', url: 'https://www.geeksforgeeks.org/apriori-algorithm/' },
        { title: 'Association Rule Mining', url: 'https://www.analyticsvidhya.com/blog/2021/10/a-comprehensive-guide-on-market-basket-analysis/' }
      ]
    }
  },
  {
    id: 'fp-growth-algorithm',
    name: 'FP-Growth: FP Trees and Mining Frequent Items',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit IV',
    content: {
      introduction: 'FP-Growth algorithm efficiently mines frequent patterns using FP-tree data structure without candidate generation.',
      definition: 'FP-Growth builds a compact FP-tree representation of transactions and mines frequent patterns through conditional pattern bases.',
      realWorldExample: 'E-commerce platforms use FP-Growth to analyze millions of purchase transactions efficiently, discovering product associations for recommendations.',
      realWorldUse: 'Applied in large-scale market basket analysis, web log mining, and any scenario requiring efficient frequent pattern mining.',
      importance: 'Significantly more efficient than Apriori for large datasets, avoiding expensive candidate generation and testing.',
      detailedExplanation: `FP-Growth algorithm: 1) Scan database to find frequent 1-itemsets, 2) Build FP-tree with frequent items sorted by frequency, 3) Mine FP-tree by constructing conditional pattern bases for each frequent item, 4) Recursively build conditional FP-trees and mine patterns. FP-tree is a compressed representation storing transaction information in a tree structure with shared prefixes. Each path represents a transaction with items sorted by frequency. The algorithm avoids candidate generation by directly extracting patterns from the tree structure. Advantages include better performance than Apriori, especially with dense datasets, and memory efficiency through compression. The method uses divide-and-conquer approach, mining patterns for each frequent item separately. Conditional pattern bases contain all paths ending with specific items, enabling focused mining. The algorithm scales well with increasing dataset size and transaction length.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=WGlMlS_Yydk',
        'https://www.youtube.com/watch?v=VtRLrQ3Ev-U'
      ],
      externalLinks: [
        { title: 'FP-Growth Algorithm', url: 'https://www.geeksforgeeks.org/fp-growth-algorithm/' },
        { title: 'FP-Tree Mining', url: 'https://www.analyticsvidhya.com/blog/2021/10/a-comprehensive-guide-on-market-basket-analysis/' }
      ]
    }
  },
  {
    id: 'dimensionality-reduction-pca-svd',
    name: 'Dimensionality Reduction Techniques: PCA and SVD',
    semester: 3,
    subject: 'Machine Learning',
    unit: 'Unit IV',
    content: {
      introduction: 'Principal Component Analysis (PCA) and Singular Value Decomposition (SVD) reduce data dimensionality while preserving important information.',
      definition: 'PCA finds orthogonal directions of maximum variance in data, while SVD decomposes matrices into constituent components for dimensionality reduction.',
      realWorldExample: 'Netflix uses SVD for collaborative filtering, reducing the user-movie rating matrix to discover latent factors like genre preferences.',
      realWorldUse: 'Applied in data visualization, noise reduction, feature extraction, compression, and preprocessing for machine learning.',
      importance: 'Essential techniques for handling high-dimensional data, reducing computational complexity, and enabling visualization.',
      detailedExplanation: `PCA finds principal components (eigenvectors of covariance matrix) that capture maximum variance in data. Steps include: center data, compute covariance matrix, find eigenvalues/eigenvectors, select top k components, project data onto selected components. PCA assumes linear relationships and works best when data has linear structure. SVD decomposes matrix A = UΣV^T where U and V are orthogonal matrices and Σ contains singular values. SVD is more general than PCA and handles non-square matrices. Applications include collaborative filtering, image compression, and latent semantic analysis. Both methods reduce dimensionality while preserving most information (measured by explained variance). Choosing number of components involves trade-off between compression and information retention. Extensions include kernel PCA for non-linear dimensionality reduction and incremental PCA for large datasets.`,
      youtubeLinks: [
        'https://www.youtube.com/watch?v=FgakZw6K1QQ',
        'https://www.youtube.com/watch?v=VtRLrQ3Ev-U'
      ],
      externalLinks: [
        { title: 'PCA Explained', url: 'https://www.analyticsvidhya.com/blog/2016/03/practical-guide-principal-component-analysis-python/' },
        { title: 'SVD Tutorial', url: 'https://www.geeksforgeeks.org/singular-value-decomposition-svd/' }
      ]
    }
  }
];