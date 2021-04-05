import { Mappable } from '.'

export class CustomMap {
    private readonly googleMap: google.maps.Map
    constructor(element: Element) {
        this.googleMap = new google.maps.Map(element, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        })
    }

    addMaker(item: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: item.location.lat,
                lng: item.location.lng,
            },
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: item.markerContent(),
            })

            infoWindow.open(this.googleMap, marker)
        })
    }
}
