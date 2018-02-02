import { NgModule } from '@angular/core';
import { FormatDatePipe } from './format-date/format-date';
import { RoundOffPipe } from './round-off/round-off';
import { FormatTimePipe } from './format-time/format-time';
import { CelciusPipe } from './celcius/celcius';
@NgModule({
	declarations: [
    FormatDatePipe,
    RoundOffPipe,
    FormatTimePipe,
    CelciusPipe],
	imports: [],
	exports: [
    FormatDatePipe,
    RoundOffPipe,
    FormatTimePipe,
    CelciusPipe]
})
export class PipesModule {}
