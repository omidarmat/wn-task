export interface PackageItem {
  id: string;
  image: string;
  label: string;
}

export interface TourPackage {
  id: string;
  label: string;
  price: number;
  items: PackageItem[];
}
