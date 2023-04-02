import { ContentWrapper, HomeBase, MapWrapper, SectionBanner, SectionMap, Title } from "../Styles/Home.style";
import { useEffect, useRef, useState } from "react";

import DefaultBox from "..//..//..//Components/DefaultBox/DefaultBox";
import SlideShowAppScreen from "../../../Components/SlideShow/SlideShowAppScreen";

const Home = () => {
    /* const [userLocation, setUserLocation] = useState(null);
    const [hospitals, setHospitals] = useState([]);
    const [pharmacies, setPharmacies] = useState([]);
    const hospitalMapRef = useRef(null); // separate mapRef for hospitals
    const pharmacyMapRef = useRef(null); // separate mapRef for pharmacies

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                setUserLocation(userLocation);

                // Search for nearby hospitals
                const hospitalRequest = {
                    location: userLocation,
                    radius: "5000",
                    type: ["hospital"],
                };
                const hospitalService = new window.google.maps.places.PlacesService(
                    hospitalMapRef.current // use separate mapRef for hospitals
                );
                hospitalService.nearbySearch(hospitalRequest, (results, status) => {
                    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                        setHospitals(results);
                    }
                });

                // Search for nearby pharmacies
                const pharmacyRequest = {
                    location: userLocation,
                    radius: "5000",
                    type: ["pharmacy"],
                };
                const pharmacyService = new window.google.maps.places.PlacesService(
                    pharmacyMapRef.current
                );
                pharmacyService.nearbySearch(pharmacyRequest, (results, status) => {
                    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                        setPharmacies(results);
                    }
                });
            });
        }
    }, []);

    useEffect(() => {
        if (userLocation) {
            const { lat, lng } = userLocation;

            // Create separate map objects for hospitals and pharmacies
            const hospitalMap = new window.google.maps.Map(hospitalMapRef.current, {
                zoom: 14,
                center: { lat, lng },
            });

            const pharmacyMap = new window.google.maps.Map(pharmacyMapRef.current, {
                zoom: 14,
                center: { lat, lng },
            });

            new window.google.maps.Marker({
                position: { lat, lng },
                map: hospitalMap, // add marker to hospital map object
            });

            hospitals.forEach((hospital) => {
                new window.google.maps.Marker({
                    position: hospital.geometry.location,
                    map: hospitalMap, // add marker to hospital map object
                });
            });

            pharmacies.forEach((pharmacy) => {
                new window.google.maps.Marker({
                    position: pharmacy.geometry.location,
                    map: pharmacyMap, // add marker to pharmacy map object
                });
            });
        }
    }, [userLocation, hospitals, pharmacies]); */

    return (
        <HomeBase>
            <SectionBanner width={"95%"} height={"50%"}>
                <DefaultBox
                    width={"98%"}
                    height={"90%"}
                    background={"white"}
                    margin={"20px 12px"}
                >
                    <SlideShowAppScreen />
                </DefaultBox>
            </SectionBanner>

            {/* <SectionMap width={"100%"} height={"50%"}>
                <ContentWrapper>
                    <Title>Closest Hospitals</Title>
                    <MapWrapper ref={hospitalMapRef} />
                </ContentWrapper>

                <ContentWrapper>
                    <Title>Closest Pharmacies</Title>
                    <MapWrapper ref={pharmacyMapRef} />
                </ContentWrapper>
            </SectionMap> */}
        </HomeBase >
    );
};

export default Home;
