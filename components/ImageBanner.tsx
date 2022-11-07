import bannerVariant1 from '../assets/bannerDividerVariant1.png'
import bannerVariant2 from '../assets/bannerDividerVariant2.png'

interface ImageBannerProps {
  variant: number
}

export default function ImageBanner({variant}:ImageBannerProps) {
  
  const style = {
    'backgroundSize': 'cover',
    
    'backgroundPosition': 'center',
    'backgroundRepeat': 'no-repeat',
    'backgroundAttachment': 'fixed',
    'boxShadow': 'inset -2px -2px 10px rgba(0,0,0,0.8)',
    'height': '10rem',
    // 'boxShadow': 'inset 2px 2px 10px rgba(0,0,0,0.6)'
  }

  const variant1 = {
    ...style, 
    'backgroundImage': `url(${bannerVariant1.src})`
  }
  
  const variant2 = {
    ...style, 
    'backgroundImage': `url(${bannerVariant2.src})`
  }

  if (variant==1) return <div style={variant1} />
  else return <div style={variant2} />
}
