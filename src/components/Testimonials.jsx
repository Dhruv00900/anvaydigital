import React, { useEffect, useState } from 'react';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const placeId = "ChIJ3836nUvNXzkRK99uF5Vv8w8"; // Your Anvaya Digital ID

  useEffect(() => {
    // This function runs once the Google Script from index.html is loaded
    const fetchReviews = () => {
      if (!window.google) return;

      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      
      service.getDetails({
        placeId: placeId,
        fields: ['reviews', 'rating', 'user_ratings_total']
      }, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && place.reviews) {
          setReviews(place.reviews);
          setLoading(false);
        }
      });
    };

    // Wait for Google Maps to be available
    if (window.google) {
      fetchReviews();
    } else {
      const interval = setInterval(() => {
        if (window.google) {
          fetchReviews();
          clearInterval(interval);
        }
      }, 500);
    }
  }, []);

  if (loading) return <div className="py-20 text-center">Loading Reviews...</div>;

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest uppercase text-gray-400 block mb-2">/ LIVE GOOGLE REVIEWS</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Real Stories from <span className="text-yellow-500">Real Clients</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-3xl bg-gray-50 flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-gray-700 italic text-sm mb-6 line-clamp-4">
                  "{review.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <img src={review.profile_photo_url} alt={review.author_name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-bold text-sm leading-none">{review.author_name}</p>
                  <p className="text-xs text-gray-400 mt-1">{review.relative_time_description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href={`https://search.google.com/local/reviews?placeid=${placeId}`}
            target="_blank"
            className="inline-block px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-yellow-500 transition-colors"
          >
            Read More on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;