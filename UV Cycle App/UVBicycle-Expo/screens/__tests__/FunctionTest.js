
import { ChangeColorBasedOnUv } from '../UvForecastScreen';

import { UNIXToDay2 } from '../WeatherForecastScreen';
import { UNIXToDay } from '../UvForecastScreen';
import { WeatherDescToImageSource } from '../WeatherForecastScreen';
import { WeatherDescToSmallImageSource } from '../WeatherForecastScreen';

test('When UV index is 0, the color of the bar will be light green', () => {
    expect(ChangeColorBasedOnUv(0)).toBe("#A5CF2E");
})

test('When UV index is 0, the color of the bar will be light green', () => {
    expect(ChangeColorBasedOnUv(1)).toBe("#A5CF2E");
})

test('When UV index is 0, the color of the bar will be light green', () => {
    expect(UNIXToDay2((new Date(1571494691)).getDay())).toBe("Thursday");
})

test('When UV index is 0, the color of the bar will be light green', () => {
    expect(UNIXToDay((new Date(1571494691)).getDay())).toBe(10);
})

test('1', () => {
    expect(WeatherDescToImageSource("foggy")).toBe("fog image");
})

test('1', () => {
    expect(WeatherDescToImageSource("rainy")).toBe("rain image");
})

test('1', () => {
    expect(WeatherDescToSmallImageSource("rainy")).toBe("rain small image");
})

test('1', () => {
    expect(WeatherDescToSmallImageSource("snowy")).toBe("snow small image");
})





