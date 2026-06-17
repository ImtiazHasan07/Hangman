class Game {
  constructor() {
    this.words = ['abandon', 'ability', 'absence', 'academy', 'account', 'accident', 'accuracy', 'acquire', 'address', 'adventure', 'against', 'agreement', 'airplane', 'alliance', 'amazing', 'analysis', 'ancestor', 'ancient', 'anger', 'apology', 'apparent', 'appearance', 'applause', 'appointment', 'approval', 'argument', 'arrival', 'artistic', 'assembly', 'assistant', 'athletic', 'attempt', 'attention', 'attraction', 'authority', 'balance', 'barrier', 'battery', 'beautiful', 'behavior', 'birthday', 'blessing', 'boundary', 'building', 'business', 'cabinet', 'calendar', 'campaign', 'capacity', 'capital', 'captain', 'capture', 'careful', 'carriage', 'casualty', 'category', 'celebrate', 'ceremony', 'champion', 'character', 'charity', 'chemical', 'citizen', 'civilian', 'clarify', 'classical', 'clearing', 'climate', 'clothing', 'collapse', 'collector', 'colony', 'comedy', 'command', 'commerce', 'commonly', 'companion', 'complaint', 'complete', 'composer', 'computer', 'concept', 'concern', 'condition', 'confident', 'conflict', 'confusion', 'conscious', 'consider', 'constant', 'consumer', 'contain', 'content', 'contract', 'contrast', 'control', 'convert', 'convince', 'courage', 'creature', 'criminal', 'critical', 'customer', 'database', 'deadline', 'decision', 'declare', 'defender', 'definite', 'delicate', 'delivery', 'describe', 'desert', 'designer', 'desire', 'destroy', 'develop', 'diameter', 'different', 'difficult', 'dignity', 'disaster', 'discover', 'disorder', 'distance', 'distinct', 'division', 'document', 'dominate', 'drainage', 'dramatic', 'dressing', 'duration', 'economic', 'educate', 'election', 'electric', 'elegant', 'element', 'elevator', 'embrace', 'emotional', 'emphasis', 'employee', 'employer', 'encourage', 'engineer', 'enhance', 'enormous', 'enrich', 'envelope', 'equipment', 'essential', 'establish', 'estimate', 'evaluate', 'evening', 'everyday', 'evidence', 'exchange', 'exciting', 'exercise', 'exhibit', 'existence', 'expansion', 'expensive', 'expert', 'explain', 'explorer', 'exposure', 'external', 'facility', 'familiar', 'fantastic', 'fascinate', 'fashion', 'festival', 'financial', 'firework', 'flexible', 'flourish', 'forecast', 'forgive', 'freedom', 'friendly', 'function', 'furniture', 'gallery', 'generate', 'generous', 'gesture', 'governor', 'gradual', 'grateful', 'guardian', 'guidance', 'handbook', 'harmony', 'headline', 'heavenly', 'heritage', 'historic', 'honestly', 'hospital', 'household', 'humanity', 'humidity', 'identify', 'illusion', 'imagine', 'immediate', 'immense', 'incident', 'inclusion', 'increase', 'infinite', 'influence', 'informal', 'innocent', 'inquiry', 'insight', 'inspire', 'install', 'instance', 'institute', 'intellect', 'interest', 'internal', 'interval', 'intimate', 'invisible', 'isolate', 'judgment', 'justice', 'keyboard', 'landscape', 'language', 'laughter', 'leadership', 'learning', 'leisure', 'library', 'lifelong', 'lighting', 'location', 'loyalty', 'magazine', 'magical', 'maintain', 'majority', 'marriage', 'material', 'maximize', 'medicine', 'memorial', 'merchant', 'midnight', 'military', 'minister', 'minority', 'miracle', 'misplace', 'mission', 'mixture', 'moderate', 'moment', 'monetary', 'monument', 'movement', 'musician', 'mystery', 'national', 'navigate', 'negative', 'neighbor', 'nervous', 'notebook', 'novelty', 'observer', 'occasion', 'official', 'operator', 'opinion', 'opposite', 'optimism', 'optional', 'ordinary', 'organize', 'original', 'outgoing', 'overcome', 'overview', 'painting', 'parallel', 'particular', 'password', 'patient', 'peaceful', 'penalty', 'perceive', 'perfect', 'perform', 'permanent', 'persuade', 'physical', 'pipeline', 'planning', 'pleasure', 'position', 'positive', 'possible', 'practical', 'precious', 'precise', 'predict', 'presence', 'pressure', 'previous', 'principal', 'priority', 'prisoner', 'privilege', 'probable', 'problem', 'producer', 'progress', 'property', 'proposal', 'prosper', 'protection', 'provoke', 'pursuit', 'quantity', 'question', 'quickly', 'radiation', 'reaction', 'realistic', 'recovery', 'reduction', 'referral', 'reflection', 'refusal', 'regional', 'relation', 'reliable', 'religion', 'remember', 'renovate', 'research', 'resident', 'resource', 'response', 'restrict', 'reunion', 'revenue', 'romantic', 'sacrifice', 'satisfied', 'schedule', 'sculpture', 'security', 'sentence', 'separate', 'serenade', 'service', 'shortage', 'shoulder', 'simplify', 'situation', 'slightly', 'software', 'solution', 'specific', 'spectator', 'speeding', 'spiritual', 'splendid', 'sporting', 'stadium', 'standard', 'station', 'steadily', 'strategy', 'strength', 'struggle', 'stunning', 'submarine', 'substance', 'substitute', 'succeed', 'suggest', 'superior', 'supplier', 'survivor', 'suspense', 'symbolic', 'sympathy', 'symphony', 'syndrome', 'tactical', 'talented', 'teaching', 'tendency', 'terrific', 'textbook', 'thematic', 'therapy', 'thinking', 'thorough', 'threaten', 'together', 'tolerance', 'tomorrow', 'tournament', 'tradition', 'transfer', 'translate', 'treasure', 'treatment', 'triangle', 'tropical', 'ultimate', 'umbrella', 'universe', 'unknown', 'unlikely', 'unusual', 'valuable', 'variable', 'velocity', 'vertical', 'victory', 'village', 'violence', 'virtual', 'visible', 'visitor', 'vitality', 'volunteer', 'vulnerable', 'wandering', 'warehouse', 'warrior', 'weakness', 'wedding', 'wellness', 'western', 'whatever', 'whenever', 'whisper', 'willing', 'withdraw', 'wonderful', 'workshop', 'worldwide', 'worrying', 'worthwhile', 'yesterday', 'yourself', 'youthful', 'zoology'];
    this.word = this.words[Math.floor(Math.random() * this.words.length)];
    this.hiddenWord = new Array(this.word.length).fill(null);
    this.lettersGuessed = [];
    this.createHiddenWord();
    this.initEvents();
  }

  createHiddenWord() {
    let wordContainer = document.getElementById('word-container');
    this.hiddenWord.forEach(() => {
      let element = document.createElement('div');
      element.innerHTML = '_';
      element.classList.add('hidden-character');

      wordContainer.appendChild(element);
    });
  }

  initEvents() {
    let keyButtons = Array.from(document.getElementsByClassName('key'));
    keyButtons.forEach((element) => {
      element.addEventListener('click', () => {
        this.handleInput(element.id);
      });
    });

    window.addEventListener('keydown', (event) => {
      let key = event.key;
      let regex = /^[a-z]$/i;
      if (regex.test(key)) {
        this.handleInput(key);
      }
    });
  }

  removeAllEvents(element) {
    let clone = element.cloneNode(true);
    element.parentNode.replaceChild(clone, element);
  }

  handleInput(letter) {
    if (this.lettersGuessed.includes(letter)) return;
    let stages = Array.from(document.getElementsByClassName('stage'));
    let wordContainer = document.getElementById('word-container');
    let keyButton = document.getElementById(letter);

    if (this.word.includes(letter)) {
      this.word.split('').forEach((character, index) => {
        if (character === letter) {
          this.hiddenWord[index] = letter;
          Array.from(wordContainer.children)[index].innerHTML = letter;
        }
      });
      this.toInWord(keyButton);
    } else {
      let nextStage = stages.find((element) => getComputedStyle(element).visibility === 'hidden');
      nextStage.style.visibility = 'visible';
      this.toNotInWord(keyButton);
    }
    this.lettersGuessed.push(letter);

    if (!this.hiddenWord.includes(null)) {
      this.gameEndedMessage('You win!');
    } else if (!stages.some((element) => getComputedStyle(element).visibility === 'hidden')) {
      this.gameEndedMessage('You lose!');
    }
  }

  styleElement({ element, backgroundColour, colour }) {
    element.style.backgroundColor = backgroundColour;
    element.style.color = colour;
  }

  toUnused(element) {
    this.styleElement({ element, backgroundColour: '#ffffff', colour: '#000000' });
  }

  toNotInWord(element) {
    this.styleElement({ element, backgroundColour: '#787c7e', colour: '#ffffff' });
  }

  toInWord(element) {
    this.styleElement({ element, backgroundColour: '#6aaa64', colour: '#ffffff' });
  }

  gameEndedMessage(message) {
    let keys = Array.from(document.getElementsByClassName('key'));
    keys.forEach((key) => {
      this.removeAllEvents(key)
    })

    let element = document.getElementById('popup-container');
    this.showElement(element);

    let outcome = document.getElementById('outcome');
    outcome.innerHTML = message;

    let word = document.getElementById('word');
    word.innerHTML = this.word;

    let lettersGuessed = document.getElementById('letters-guessed');
    lettersGuessed.innerHTML = this.lettersGuessed.length + 1;

    let closeButton = document.getElementById('close-button');
    let continueButton = document.getElementById('continue-button');
    [closeButton, continueButton].forEach((button) => {
      button.addEventListener('click', () => {
        this.hideElement(element);
        this.reset()
      });
    });
  }

  reset() {
    let stages = Array.from(document.getElementsByClassName('stage'));
    stages.forEach((stage) => {
      stage.style.visibility = 'hidden';
    })

    let keys = Array.from(document.getElementsByClassName('key'));
    keys.forEach((key) => {
      this.toUnused(key);
    })

    this.word = this.words[Math.floor(Math.random() * this.words.length)];
    this.hiddenWord = new Array(this.word.length).fill(null);
    this.lettersGuessed = [];
    
    let wordContainer = document.getElementById('word-container')
    wordContainer.innerHTML = null

    this.createHiddenWord();
    this.initEvents();
  }

  hideElement(element) {
    element.style.visibility = 'hidden';
  }

  showElement(element) {
    element.style.visibility = 'visible';
  }
}

let game = new Game();
