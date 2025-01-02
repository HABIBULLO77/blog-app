type Headline = {
  title: string;
  image: string;
  description?: string; // Optional property
  [key: string]: any; // For additional unexpected properties
};
