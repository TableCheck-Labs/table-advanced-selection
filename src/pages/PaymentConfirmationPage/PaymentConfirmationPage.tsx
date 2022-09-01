import { Button } from '@tablecheck/tablekit-button';
import { Appearance, Input } from '@tablecheck/tablekit-input';
import {
  defaultI18nCountries,
  PhoneInput
} from '@tablecheck/tablekit-phone-input';
import { FontWeight, Size } from '@tablecheck/tablekit-theme';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  DetailWrapper,
  Divider,
  ItemRow,
  ItemValue,
  Row,
  StyledPageWrapper,
  SubItemValue,
  Title
} from 'pages/PaymentConfirmationPage/paymentConfirmation.styles';

export function PaymentConfirmationPage(): JSX.Element {
  const navigate = useNavigate();
  const [t] = useTranslation();

  return (
    <StyledPageWrapper>
      <div>
        <Title textAlign="center">
          {t('pages:payment_confirmation.complete_payment')}
        </Title>
        <Row>
          <div>
            <Input
              isMessageHidden
              shouldFitContainer
              appearance={Appearance.ReadOnly}
              name="firstName"
              type="text"
              value="Jonh"
              width={Size.XSmall}
            />
          </div>
          <div>
            <Input
              isMessageHidden
              shouldFitContainer
              appearance={Appearance.ReadOnly}
              name="lastName"
              type="text"
              value="Doe"
              width={Size.XSmall}
            />
          </div>
        </Row>
        <Row>
          <Input
            isMessageHidden
            shouldFitContainer
            appearance={Appearance.ReadOnly}
            name="lastName"
            type="email"
            value="jonh.doe@example.com"
            width={Size.XSmall}
          />
        </Row>
        <Row>
          <PhoneInput
            label={t('pages:payment_confirmation.phone_number')}
            onChange={() => {}}
            i18nCountries={defaultI18nCountries}
            defaultCountry="JP"
            shouldFitContainer
            appearance={Appearance.ReadOnly}
            value="81-80-66500000"
            flagSelectOptions={{
              menuPortalTarget: document.body
            }}
            shouldHideFlags
          />
        </Row>
        <DetailWrapper>
          <Title>{t('pages:payment_confirmation.order_title')}</Title>
          <ItemRow>
            <ItemValue>
              {t('pages:payment_confirmation.private_room')}
            </ItemValue>
            <ItemValue>¥4000</ItemValue>
          </ItemRow>
          <ItemRow>
            <SubItemValue>
              {t('pages:payment_confirmation.subtitle')}
            </SubItemValue>
          </ItemRow>
        </DetailWrapper>
        <Divider />
        <DetailWrapper>
          <ItemRow>
            <ItemValue>{t('pages:payment_confirmation.subtotal')}</ItemValue>
            <ItemValue>¥4100</ItemValue>
          </ItemRow>
          <ItemRow>
            <ItemValue>{t('pages:payment_confirmation.taxes')}</ItemValue>
            <ItemValue>¥100</ItemValue>
          </ItemRow>
          <ItemRow>
            <ItemValue fontWeight={FontWeight.Bold}>
              {t('pages:payment_confirmation.total')}
            </ItemValue>
            <ItemValue fontWeight={FontWeight.Bold}>¥4100</ItemValue>
          </ItemRow>
        </DetailWrapper>
      </div>
      <Row>
        <Button
          shouldFitContainer
          onClick={() => navigate('/booking-success')}
        >
          {t('actions:confirm_booking')}
        </Button>
      </Row>
    </StyledPageWrapper>
  );
}
