import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { IonContent, ModalController, NavController } from '@ionic/angular';
import Swiper from 'swiper';
import { IUserData } from '../shared/interfaces/user-data.interface';
import { SuccessModalComponent } from '../shared/components/success-modal/success-modal.component';
import { IModal } from '../shared/interfaces/modal.interface';
import { MODAL_INFO_SUCCESS } from './constants/modal';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.page.html',
    styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements AfterViewInit {
    @ViewChild('swiper') swiperRef!: ElementRef;
    @ViewChild(IonContent) content!: IonContent;
    public swiper?: Swiper;
    public stepName: string = "Número celular";
    public activeIndex: number = 0;
    public numberPhone: number = 0;
    private dataUser?: IUserData;
    private modalActive: boolean = false;
    private infoSuccess: IModal = MODAL_INFO_SUCCESS;

    constructor(
        private navCtrl: NavController,
        private cdr: ChangeDetectorRef,
        private modalController: ModalController,
    ) { }

    ngAfterViewInit() {
        if (!this.swiper) this.swiperReady();
        this.cdr.detectChanges();
    }

    navigateBack() {
        this.navCtrl.navigateBack(["/home"]);
    }

    swiperReady() {
        this.swiper = this.swiperRef?.nativeElement.swiper;
        if (this.swiper) {
            this.swiper.on('slideChange', () => {
                this.slideChange();
            });
        }
    }

    slideChange() {
        if (this.swiper?.activeIndex !== undefined) {
            this.activeIndex = this.swiper.activeIndex;
            this.cdr.detectChanges();
        }
    }

    toSlide(index: number) {
        this.swiperReady();
        this.swiper?.slideTo(index);
    }

    phoneNumberChange(numberPhone: number) {
        this.numberPhone = numberPhone;
        this.swiper?.slideNext();
        this.content.scrollToTop(500)
    }

    formDataChange(formData: IUserData, numberPhone: number) {
        const combinedData = {
            ...formData,
            numberPhone
        };

        this.dataUser = combinedData;
        this.swiper?.slideNext();
        this.content.scrollToTop(500)
    }

    sendData() {
        console.log("Información", this.dataUser);
        console.table(this.dataUser);
        this.modalCustomizeDesktop();
    }

    async modalCustomizeDesktop() {
        if (!this.modalActive) {
            this.modalActive = true;
            const modal = await this.modalController.create({
                component: SuccessModalComponent,
                componentProps: {
                    infoModal: this.infoSuccess,
                },
                cssClass: 'modal-success',
                mode: 'ios',
            });
            modal.onDidDismiss().then(() => {
                this.modalActive = false;
                this.navCtrl.navigateRoot(["/home"]);
            });
            return await modal.present();
        }
    }
}
