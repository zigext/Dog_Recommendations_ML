import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const AKITA = {
    breed: 'Akita',
    img: 'http://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001904/Akita-On-White-01.jpg',
    info: 'The Akita is a large and powerful dog breed with a noble and intimidating presence. He was originally used for guarding royalty and nobility in feudal Japan. The Akita also tracked and hunted wild boar, black bear, and sometimes deer. He is a fearless and loyal guardian of his family. The Akita does not back down from challenges and does not frighten easily. Yet he is also an affectionate, respectful, and amusing dog when properly trained and socialized.'
}

const AMERICAN_PIT_BULL_TERRIER = {
    breed: 'American Pit Bull Terrier',
    img: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
    info: 'The American Pit Bull Terrier is a companion and family dog breed. Originally bred to “bait” bulls, the breed evolved into all-around farm dogs, and later moved into the house to become “nanny dogs” because they were so gentle around children. Their tenacity, gameness, and courage make them popular competitors in the sports of weight pulling, agility, and obedience competition.'
}

const BEAGLE = {
    breed: 'Beagle',
    img: 'https://www.petful.com/wp-content/uploads/2016/10/Beagle.jpg',
    info: 'Not only is the Beagle an excellent hunting dog and loyal companion, it is also happy-go-lucky, funny, and—thanks to its pleading expression—cute. They were bred to hunt in packs, so they enjoy company and are generally easygoing.'
}

const BULLDOG = {
    breed: 'Bulldog',
    img: 'https://www.petful.com/wp-content/uploads/2017/02/Bulldog.jpg',
    info: 'Bulldogs originally were used to drive cattle to market and to compete in a bloody sport called bullbaiting. Today, they’re gentle companions who love kids. A brief walk and a nap on the sofa is just this dog breed‘s speed.'
}

const BORDER_COLLIE = {
    breed: 'Border Collie',
    img: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/border-collie-dog-breed-pictures/6-layingbeach.jpg',
    info: 'The Border Collie dog breed was developed to gather and control sheep in the hilly border country between Scotland and England. He is known for his intense stare, or “eye,” with which he controls his flock. He’s a dog with unlimited energy, stamina, and working drive, all of which make him a premier herding dog; he’s still used today to herd sheep on farms and ranches around the world. The highly trainable and intelligent Border Collie also excels in various canine sports, including obedience, flyball, agility, tracking, and flying disc competitions.'
}

const CHIHUAHUA = {
    breed: 'Chihuahua',
    img: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/chihuahua-dog-breed-pictures/9-play.jpg',
    info: 'The Chihuahua dog breed‘s charms include his small size, outsize personality, and variety in coat types and colors. He’s all dog, fully capable of competing in dog sports such as agility and obedience, and is among the top 10 watchdogs recommended by experts. He loves nothing more than being with his people and requires a minimum of grooming and exercise.'
}

const COCKER_SPANIEL = {
    breed: 'Cocker Spaniel',
    img: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/cocker-spaniel-dogs-and-puppies/cocker-spaniel-dogs-puppies-3.jpg',
    info: 'The Cocker Spaniel is primarily a beloved companion dog breed, though he remains a capable bird dog at heart. Beautiful to look at (and labor-intensive to groom), the Cocker’s amenable, cheerful disposition also makes him a treat to have in the family. Never more pleased than when he’s pleasing you, he’s as happy to snuggle on the couch with his favorite adults as to romp in the yard with the kids.'
}

const DALMATIAN = {
    breed: 'Dalmatian',
    img: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/dalmatian-dog-breed-pictures/10-water.jpg',
    info: 'Best known as the star of Disney’s 101 Dalmatians, this sleek and athletic dog breed has a history that goes back several hundred years. He started out as a coach dog but has also served in many other capacities, including hunter, firehouse dog, and circus performer. As charming in life as in film, he goes from gallant to goofy to gallant again in the blink of an eye, and loves to be a part of everything his family does.'
}

const DOBERMAN = {
    breed: 'Doberman Pinscher',
    img: 'http://www.educ4pattes.com/chiens/wp-content/uploads/2014/05/doberman-893931_1280-1280x640.jpg',
    info: 'The Doberman Pinscher was developed in Germany during the late 19th century, primarily as a guard dog. His exact ancestry is unknown, but he’s believed to be a mixture of many dog breeds, including the Rottweiler, Black and Tan Terrier, and German Pinscher. With his sleek coat, athletic build, and characteristic cropped ears and docked tail, the Doberman Pinscher looks like an aristocrat. He is a highly energetic and intelligent dog, suited for police and military work, canine sports, and as a family guardian and companion.'
}

const FRENCH_BULLDOG = {
    breed: 'French Bulldog',
    img: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/french-bulldog-dog-breed-pictures/2-whitelaying.jpg',
    info: 'The French Bulldog has enjoyed a long history as a companion dog. Created in England to be a miniature Bulldog, he accompanied English lacemakers to France, where he acquired his Frenchie moniker. Besides being a companion, he once served as an excellent ratter, but today his job focuses on being a fabulous family friend and show dog. He’s a rare dog breed, so expect to put in some time on a waiting list before you’re able to bring one home.'
}

const GERMAN_SHEPHERD = {
    breed: 'German Shepherd',
    img: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/side-3.jpg',
    info: 'The German Shepherd Dog is one of America’s most popular dog breeds — for good reason. He’s an intelligent and capable working dog. His devotion and courage are unmatched. And he’s amazingly versatile, excelling at most anything he’s trained to do: guide and assistance work for the handicapped, police and military service, herding, search and rescue, drug detection, competitive obedience and, last but not least, faithful companion.'
}

const GOLDEN_RETREIVER = {
    breed: 'Golden Retreiver',
    img: 'https://www.petsfolio.com/wp-content/uploads/2017/04/download.jpg',
    info: 'The Golden Retriever is one of the most popular dog breeds in the U.S. The breed’s friendly, tolerant attitude makes him a fabulous family pet, and his intelligence makes him a highly capable working dog. Golden Retrievers excel at retrieving game for hunters, tracking, sniffing out drugs, and as therapy and assistance dogs. They’re also natural athletes, and do well in dog sports such as agility and competitive obedience.'
}

const LABRADOR_RETREIVER = {
    breed: 'Labrador Retreiver',
    img: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/labrador-retriever-dog-breed-pictures/labrador-retriever-dog-pictures-6.jpg',
    info: 'The Labrador Retriever was bred to be both a friendly companion and a useful working dog breed. Historically, he earned his keep as a fisherman’s helper: hauling nets, fetching ropes, and retrieving fish from the chilly North Atlantic. Today’s Labrador Retriever is as good-natured and hard working as his ancestors, and he’s America’s most popular breed. These days the Lab works as a retriever for hunters, assistance dog to the handicapped, show competitor, and search and rescue dog, among other canine jobs.'
}

const MALTESE = {
    breed: 'Maltese',
    img: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/maltese-dog-breed-picture/9-fullbody.jpg',
    info: 'A dog breed who’s gentle and fearless, the Maltese greets everyone as a friend. His glamorous white coat gives him a look of haughty nobility, but looks can be deceiving. This is a sprightly, vigorous dog who excels not only as a companion but also as a therapy dog and competitor in such dog sports as agility, obedience, rally, and tracking. But most of all, he loves to be with his people.'
}

const SHIH_TZU = {
    breed: 'Shih Tzu',
    img: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/shih-tzu-dog-breed-pictures/shih-tzu-breed-picture-5.jpg',
    info: 'His name means little lion, but there’s nothing fierce about this dog breed. The Shih Tzu is a lover, not a hunter. Bred solely to be a companion, the Shih Tzu is an affectionate, happy, outgoing housedog who loves nothing more than to follow his people from room to room. In recent years, however, owners have started taking the Shih Tzu off their laps and into dog sports, training him for obedience, rally, and agility competitions.'
}

const PEMBROKE_WELSH_CORGI = {
    breed: 'Pembroke Welsh Corgi',
    img: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg',
    info: 'Originally bred to herd cattle, sheep, and horses, the Pembroke Welsh Corgi is an active and intelligent dog breed. Easy to train and eager to learn, Pembrokes are great with children and other pets, and you can find them in four different coat colors and markings.'
}

const POMERANIAN = {
    breed: 'Pomeranian',
    img: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/pomeranian-dog-breed-pictures/1-layingforward.jpg',
    info: 'Descended from large sled dog breeds, the now-tiny Pomeranian has a long and interesting history. The foxy-faced dog, nicknamed “the little dog who thinks he can,” is compact, active, and capable of competing in agility and obedience or simply being a family friend.'
}

const PUG = {
    breed: 'Pug',
    img: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/4-whitestanding.jpg',
    info: 'Pugs often are described as a lot of dog in a small space. These sturdy, compact dogs are a part of the American Kennel Club’s Toy group, and are known as the clowns of the canine world because they have a great sense of humor and like to show off. Originally bred to be a lap dog, the Pug thrives on human companionship.'
}

const POODLE = {
    breed: 'Poodle',
    img: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/poodle-dog-breed-pictures/showdog-10.jpg',
    info: 'Elegant. Proud. Clever. Poodles are impressive dogs, as the many best-in-show winners from this dog breed can attest. Behind the blue ribbons, impressive hairdos, and regal attitude, you’ll find an affectionate family dog with an ancient history and many talents.'
}

const ROTTWEILER = {
    breed: 'Rottweiler',
    img: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/rottweiler-dogs-and-puppies/rottweiler-dogs-puppies-2.jpg',
    info: 'Rottweilers were originally dogs bred to drive cattle to market. Later they were used to pull carts for butchers. They were among the earliest police dogs and serve with honor in the military. Most important, they are popular family guardians and friends.'
}

const SIBERIAN_HUSKY = {
    breed: 'Siberian Husky',
    img: 'https://www.petsworld.in/blog/wp-content/uploads/2015/08/Siberian-Husky-Dogs-HD-Wallpaper.jpg',
    info: 'The Siberian Husky is a beautiful dog breed with a thick coat that comes in a multitude of colors and markings. Their blue or multi-colored eyes and striking facial masks only add to the appeal of this breed, which originated in Siberia. It is easy to see why many are drawn to the Siberian’s wolf-like looks, but be aware that this athletic, intelligent dog can be independent and challenging for first-time dog owners. Huskies also put the “H” in Houdini and need a fenced yard that is sunk in the ground to prevent escapes.'
}

const SHIBA_INU = {
    breed: 'Shiba Inu',
    img: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/shiba-inu-dog-breed-picutres/9-epic.jpg',
    info: 'The Shiba Inu dog breed was originally bred to flush birds and small game, and was occasionally used to hunt wild boar. He is one of Japan’s six native breeds: Akita (large), Kishu, Hokkaido, Kai, Shikoku (medium), and Shiba (small). He is known for his spirited personality, small upright ears, and cat-like agility. Today he serves primarily as a companion dog in Japan and the United States.'
}

const SAMOYED = {
    breed: 'Samoyed',
    img: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/samoyed-dogs-and-puppies/samoyed-dogs-puppies-5.jpg',
    info: 'Originally bred to hunt, haul sledges, and herd reindeer, the Samoyed dog breed proved a valuable companion for northwestern Siberia’s Samoyede people. Among the breed’s duties: pack hiking, tracking, and warming their owners by sleeping on top of them at night. A working breed, the Samoyed can be strong-willed at times, but above all they remain friendly, gentle, and devoted family dogs.'
}

const YORKSHIRE_TERRIER = {
    breed: 'Yorkshire Terrier',
    img: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/yorkshireterrier-dog-breed-pictures/10-puppy.jpg',
    info: 'Small in size but big in personality, the Yorkshire Terrier makes a feisty but loving companion. The most popular toy dog breed in the U.S., the “Yorkie” has won many fans with his devotion to his owners, his elegant looks, and his suitability to apartment living.'
}

const BANGKAEW = {
    breed: 'Bangkaew',
    img: 'http://media1.webgarden.cz/images/media1:55b9280ea807f.jpg/20141127_Graffitti_01.jpg',
    info: 'The Thai Bangkaew Dog is compactly built and square in profile. It is well proportioned, with a smooth gait. The double coat consists of a short undercoat, with longer guard hairs growing through it forming the outer coat. The coat is thicker and longer around the neck, chest, and back forming a lion-like ruff, which is more noticeable on male dogs than on female dogs. The plumed tail is carried with moderate upward curve over the back. The breed comes in white with shades of red, gray, brown, and black in a wide variety of patterns.There are some that have white coats.'
}


class Result extends Component {
    constructor(props) {
        super(props)
        this.data = {}
    }

    componentWillMount = () => {
        let result = this.props.result[0]
        switch (result) {
            case 'akita':
                this.data = AKITA
                break
            case 'american pit bull terrier':
                this.data = AMERICAN_PIT_BULL_TERRIER
                break
            case 'beagle':
                this.data = BEAGLE
                break
            case 'bulldog':
                this.data = BULLDOG
                break
            case 'border collie':
                this.data = BORDER_COLLIE
                break
            case 'chihuahua':
                this.data = CHIHUAHUA
                break
            case 'cocker spaniel':
                this.data = COCKER_SPANIEL
                break
            case 'dalmatian':
                this.data = DALMATIAN
                break
            case 'doberman':
                this.data = DOBERMAN
                break
            case 'french bulldog':
                this.data = FRENCH_BULLDOG
                break
            case 'german shepherd':
                this.data = GERMAN_SHEPHERD
                break
            case 'golden retreiver':
                this.data = GOLDEN_RETREIVER
                break
            case 'labrador retreiver':
                this.data = LABRADOR_RETREIVER
                break
            case 'maltese':
                this.data = MALTESE
                break
            case 'shih tzu':
                this.data = SHIH_TZU
                break
            case 'pembroke welsh corgi':
                this.data = PEMBROKE_WELSH_CORGI
                break
            case 'pomeranian':
                this.data = POMERANIAN
                break
            case 'pug':
                this.data = PUG
                break
            case 'poodle':
                this.data = POODLE
                break
            case 'rottweiler':
                this.data = ROTTWEILER
                break
            case 'shiba inu':
                this.data = SHIBA_INU
                break
            case 'siberian husky':
                this.data = SIBERIAN_HUSKY
                break
            case 'samoyed':
                this.data = SAMOYED
                break
            case 'yorkshire terrier':
                this.data = YORKSHIRE_TERRIER
                break
            case 'bangkaew':
                this.data = BANGKAEW
                break
        }
        console.log(this.data.breed)
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.innerContainer}>
                    <h2>You got {this.data.breed} ! </h2>
                    <img src={this.data.img} style={styles.img} />
                    <p style={styles.text}>{this.data.info}</p>

                    <RaisedButton
                        label="Try Again"
                        primary={true}
                        style={styles.button}
                        labelStyle={styles.label}
                        onClick={this.props.resetState} />
                </div>
            </div>
        )
    }
}

export default Result

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#424141',
        minHeight: '100vh',
        padding: 30
    },
    innerContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    button: {
        margin: 12,
        marginTop: 30
    },
    img: {
        margin: 25,
        height: 500,
        width: '70%'
    },
    text: {
        fontSize: 18
    },
    label: {
        fontSize: 21
    }
}
