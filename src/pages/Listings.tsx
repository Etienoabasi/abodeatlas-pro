import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Search, 
  Filter, 
  Map, 
  Grid3X3, 
  List, 
  Heart, 
  MapPin, 
  Bed, 
  Bath, 
  Square,
  ChevronDown 
} from "lucide-react";
import apartmentImage from "@/assets/apartment-1.jpg";
import houseImage from "@/assets/house-1.jpg";
import condoImage from "@/assets/condo-1.jpg";

// Mock data
const mockProperties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 380000000,
    location: "Downtown District",
    image: apartmentImage,
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: "Apartment"
  },
  {
    id: 2,
    title: "Family Suburban Home",
    price: 550000000,
    location: "Maple Heights",
    image: houseImage,
    beds: 4,
    baths: 3,
    sqft: 2400,
    type: "House"
  },
  {
    id: 3,
    title: "Luxury Waterfront Condo",
    price: 750000000,
    location: "Harbor View",
    image: condoImage,
    beds: 3,
    baths: 2,
    sqft: 1800,
    type: "Condo"
  },
  // Duplicate for more results
  {
    id: 4,
    title: "Cozy Studio Apartment",
    price: 270000000,
    location: "Arts District",
    image: apartmentImage,
    beds: 1,
    baths: 1,
    sqft: 800,
    type: "Apartment"
  },
  {
    id: 5,
    title: "Executive Home with Pool",
    price: 630000000,
    location: "Oak Valley",
    image: houseImage,
    beds: 5,
    baths: 4,
    sqft: 3200,
    type: "House"
  },
  {
    id: 6,
    title: "Penthouse Suite",
    price: 1000000000,
    location: "Skyline Heights",
    image: condoImage,
    beds: 3,
    baths: 3,
    sqft: 2200,
    type: "Condo"
  }
];

export default function Listings() {
  const [viewMode, setViewMode] = useState<"grid" | "list" | "map">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    minPrice: 0,
    maxPrice: 1500000000,
    beds: "",
    baths: "",
    priceRange: [0, 1500000000]
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Browse Properties</h1>
          
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by location, property type, or keywords..."
                className="pl-10"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              />
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="w-full lg:w-auto"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "map" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("map")}
              >
                <Map className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {mockProperties.length} properties found
            </p>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-full lg:w-80 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Filters</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="propertyType">Property Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All Types" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="condo">Condo</SelectItem>
                          <SelectItem value="land">Land</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Price Range</Label>
                      <div className="mt-2">
                        <Slider
                          value={filters.priceRange}
                          onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
                          max={1500000000}
                          step={10000000}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-1">
                          <span>{formatPrice(filters.priceRange[0])}</span>
                          <span>{formatPrice(filters.priceRange[1])}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Bedrooms</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Any" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1+</SelectItem>
                            <SelectItem value="2">2+</SelectItem>
                            <SelectItem value="3">3+</SelectItem>
                            <SelectItem value="4">4+</SelectItem>
                            <SelectItem value="5">5+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Bathrooms</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Any" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1+</SelectItem>
                            <SelectItem value="2">2+</SelectItem>
                            <SelectItem value="3">3+</SelectItem>
                            <SelectItem value="4">4+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button className="w-full">Apply Filters</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Properties Grid/List */}
          <div className="flex-1">
            {viewMode === "map" ? (
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Map view would be implemented here</p>
              </div>
            ) : (
              <div className={
                viewMode === "grid" 
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
                  : "space-y-6"
              }>
                {mockProperties.map((property) => (
                  <Card key={property.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={property.image}
                        alt={property.title}
                        className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                          viewMode === "list" ? "w-80 h-48" : "w-full h-48"
                        }`}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-4 right-4 h-8 w-8 p-0 bg-background/80 hover:bg-background"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {property.title}
                        </h3>
                        <span className="text-2xl font-bold text-primary">
                          {formatPrice(property.price)}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Bed className="h-4 w-4 mr-1" />
                          <span>{property.beds} beds</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="h-4 w-4 mr-1" />
                          <span>{property.baths} baths</span>
                        </div>
                        <div className="flex items-center">
                          <Square className="h-4 w-4 mr-1" />
                          <span>{property.sqft} sqft</span>
                        </div>
                      </div>

                      <Button className="w-full">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}